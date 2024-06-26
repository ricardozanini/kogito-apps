<!---
  Licensed to the Apache Software Foundation (ASF) under one
  or more contributor license agreements.  See the NOTICE file
  distributed with this work for additional information
  regarding copyright ownership.  The ASF licenses this file
  to you under the Apache License, Version 2.0 (the
  "License"); you may not use this file except in compliance
  with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing,
  software distributed under the License is distributed on an
  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, either express or implied.  See the License for the
  specific language governing permissions and limitations
  under the License.
-->
# Kogito persistence commons

This is the module that provides the persistence abstraction for the kogito apps. 

It is composed by three modules: 

1) `persistence-commons-api` contains the interfaces `Storage` and `StorageService` that the consumer has to inject in his application. In addition to that, it contains the interface `Query` that the consumer has to use to query the storage. 
2) `persistence-commons-infinispan` contains all the classes to manage infinispan as persistence layer. 
3) `persistence-commons-protobuf` contains the `ProtobufService` that the consumer can use to manage his protobuf schemas. 
4) `persistence-commons-redis` contains all the classes to manage redis as persistence layer. See [here](./persistence-commons-redis/README.md) for the complete list of supported operations.

## How to use it

The consumer has to 

1) Inject the `StorageService` bean where needed, and the implementation will be selected using the property `kogito.apps.persistence.type`. 
2) Create one module for each supported storage type, add the custom marshallers (for infinispan) or the custom codecs (for mongo for example). See [here](../data-index/data-index-storage/data-index-storage-infinispan/src/main/java/org/kie/kogito/index/infinispan/protostream/ProtostreamProducer.java)  for an example.
3) For protobuf, provide a `ProtostreamProducer` as shown [here](../data-index/data-index-storage/data-index-storage-protobuf/src/main/java/org/kie/kogito/index/protobuf/ProtostreamProducer.java) .