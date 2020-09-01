/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = userTasks = [
  {
    id: '45a73767-5da3-49bf-9c40-d533c3e77ef3',
    description: null,
    name: 'VisaApplication',
    priority: '1',
    processInstanceId: '9ae7ce3b-d49c-4f35-b843-8ac3d22fa427',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Ready',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-02-19T11:11:56.282Z',
    excludedUsers: [],
    potentialGroups: [],
    potentialUsers: [],
    inputs:
      '{"Skippable":"true","trip":{"city":"Boston","country":"US","begin":"2020-02-19T23:00:00.000+01:00","end":"2020-02-26T23:00:00.000+01:00","visaRequired":true},"TaskName":"VisaApplication","NodeName":"Apply for visa","traveller":{"firstName":"Rachel","lastName":"White","email":"rwhite@gorle.com","nationality":"Polish","address":{"street":"Cabalone","city":"Zerf","zipCode":"765756","country":"Poland"}},"Priority":"1"}',
    outputs: '{}',
    referenceName: 'Apply for visa',
    lastUpdate: '2020-02-19T11:11:56.282Z',
    endpoint:
      'http://localhost:4000/travels/9ae7ce3b-d49c-4f35-b843-8ac3d22fa427/VisaApplication/45a73767-5da3-49bf-9c40-d533c3e77ef3'
  },
  {
    id: '047ec38d-5d57-4330-8c8d-9bd67b53a529',
    description: '',
    name: 'ConfirmTravel',
    priority: '1',
    processInstanceId: '9ae407dd-cdfa-4722-8a49-0a6d2e14550d',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Ready',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-02-19T10:59:34.185Z',
    excludedUsers: [],
    potentialGroups: [],
    potentialUsers: [],
    inputs:
      '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null}}',
    outputs: '{}',
    referenceName: 'Confirm travel (Submit fails)',
    lastUpdate: '2020-02-19T13:22:40.909Z',
    endpoint:
      'http://localhost:4000/travels/9ae407dd-cdfa-4722-8a49-0a6d2e14550d/VisaApplication/047ec38d-5d57-4330-8c8d-9bd67b53a529'
  },
  {
    id: 'f6be5b6b-34de-4b06-b6e7-05bcf8ba7f54',
    description: '',
    name: 'ConfirmTravel',
    priority: '1',
    processInstanceId: '4bfdd404-c46a-4751-b401-b1428a30fa07',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Completed',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: '2020-02-19T10:49:24.623Z',
    lastUpdate: '2020-02-19T10:49:24.623Z',
    started: '2020-02-19T10:49:16.559Z',
    excludedUsers: [],
    potentialGroups: [],
    potentialUsers: [],
    inputs:
      '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null}}',
    outputs: '{}',
    referenceName: 'Confirm travel',
    endpoint:
      'http://localhost:4000/travels/4bfdd404-c46a-4751-b401-b1428a30fa07/ConfirmTravel/f6be5b6b-34de-4b06-b6e7-05bcf8ba7f54'
  },
  {
    id: '5cead49f-7649-410a-89ff-840cc52adf52',
    description: '',
    name: 'ConfirmTravel',
    priority: '1',
    processInstanceId: '7e31993d-8c9a-45e8-997d-7156632a520f',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Aborted',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: '2020-02-19T09:55:52.574Z',
    started: '2020-02-19T09:55:38.81Z',
    lastUpdate: '2020-02-19T09:55:52.574Z',
    excludedUsers: [],
    potentialGroups: [],
    potentialUsers: [],
    inputs:
      '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null}}',
    outputs: '{}',
    referenceName: 'Confirm travel',
    endpoint:
      'http://localhost:4000/travels/7e31993d-8c9a-45e8-997d-7156632a520f/ConfirmTravel/5cead49f-7649-410a-89ff-840cc52adf52'
  },
  {
    id: '841b9dba-3d91-4725-9de3-f9f4853b417e',
    name: 'VisaApplication',
    referenceName: 'Apply for visa (Submit fail)',
    description: null,
    priority: '1',
    processInstanceId: 'a84df9ba-f41e-47cb-9aa5-67cffff2c5bc',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Ready',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-07-30T09:00:02.386Z',
    excludedUsers: [],
    potentialGroups: ['group1'],
    potentialUsers: [],
    inputs:
      '{"trip":{"city":"New York","country":"US","begin":"2019-12-09T23:00:00.000+01:00","end":"2019-12-14T23:00:00.000+01:00","visaRequired":true},"TaskName":"VisaApplication","NodeName":"Apply for visa","Priority":"1","Skippable":"true","traveller":{"firstName":"Jan","lastName":"Kowalski","email":"jan.kowalski@example.com","nationality":"Polish","address":{"street":"polna","city":"Krakow","zipCode":"32000","country":"Poland"}},"GroupId":"group1"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T09:00:02.39Z',
    endpoint:
      'http://localhost:8080/travels/a84df9ba-f41e-47cb-9aa5-67cffff2c5bc/VisaApplication/841b9dba-3d91-4725-9de3-f9f4853b417e'
  },
  {
    id: '475e3eb3-1de4-4f68-a146-79c236353a03',
    name: 'VisaApplication',
    referenceName: 'Apply for visa',
    description: null,
    priority: '1',
    processInstanceId: '5c10ec86-4cf5-4de2-a5ab-d962893f079d',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Ready',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-07-30T09:00:04.88Z',
    excludedUsers: [],
    potentialGroups: ['group1'],
    potentialUsers: [],
    inputs:
      '{"trip":{"city":"New York","country":"US","begin":"2019-12-09T23:00:00.000+01:00","end":"2019-12-14T23:00:00.000+01:00","visaRequired":true},"TaskName":"VisaApplication","NodeName":"Apply for visa","Priority":"1","Skippable":"true","traveller":{"firstName":"Jan","lastName":"Kowalski","email":"jan.kowalski@example.com","nationality":"Polish","address":{"street":"polna","city":"Krakow","zipCode":"32000","country":"Poland"}},"GroupId":"group1"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T09:00:04.884Z',
    endpoint:
      'http://localhost:8080/travels/5c10ec86-4cf5-4de2-a5ab-d962893f079d/VisaApplication/475e3eb3-1de4-4f68-a146-79c236353a03'
  },
  {
    id: 'c6fedd33-8fea-4adf-97a0-9d2b6676e9d0',
    name: 'VisaApplication',
    referenceName: 'Apply for visa',
    description: null,
    priority: '1',
    processInstanceId: '9d19c8ec-aa5c-4681-9bb5-ff8cbce08091',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Ready',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-07-30T09:00:07.075Z',
    excludedUsers: [],
    potentialGroups: ['group1'],
    potentialUsers: [],
    inputs:
      '{"trip":{"city":"New York","country":"US","begin":"2019-12-09T23:00:00.000+01:00","end":"2019-12-14T23:00:00.000+01:00","visaRequired":true},"TaskName":"VisaApplication","NodeName":"Apply for visa","Priority":"1","Skippable":"true","traveller":{"firstName":"Jan","lastName":"Kowalski","email":"jan.kowalski@example.com","nationality":"Polish","address":{"street":"polna","city":"Krakow","zipCode":"32000","country":"Poland"}},"GroupId":"group1"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T09:00:07.079Z',
    endpoint:
      'http://localhost:8080/travels/9d19c8ec-aa5c-4681-9bb5-ff8cbce08091/VisaApplication/c6fedd33-8fea-4adf-97a0-9d2b6676e9d0'
  },
  {
    id: '809aae9e-f0bf-4892-b0c9-4be80664d2aa',
    name: 'ConfirmTravel',
    referenceName: 'Confirm travel',
    description: null,
    priority: '1',
    processInstanceId: '5204b2d2-54ec-4f07-8f8c-3079a1f5fe9b',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Ready',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-07-30T09:00:15.381Z',
    excludedUsers: [],
    potentialGroups: ['group2'],
    potentialUsers: [],
    inputs:
      '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null},"GroupId":"group2"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T09:00:15.389Z',
    endpoint:
      'http://localhost:8080/travels/5204b2d2-54ec-4f07-8f8c-3079a1f5fe9b/ConfirmTravel/809aae9e-f0bf-4892-b0c9-4be80664d2aa'
  },
  {
    id: '615b9143-1468-4028-b454-6122e2139f5c',
    name: 'ConfirmTravel',
    referenceName: 'Confirm travel',
    description: null,
    priority: '1',
    processInstanceId: 'd6685e24-0aad-4e5c-a64f-29e95cae9e5e',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Ready',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-07-30T09:00:18.044Z',
    excludedUsers: [],
    potentialGroups: ['group2'],
    potentialUsers: [],
    inputs:
      '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null},"GroupId":"group2"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T09:00:18.05Z',
    endpoint:
      'http://localhost:8080/travels/d6685e24-0aad-4e5c-a64f-29e95cae9e5e/ConfirmTravel/615b9143-1468-4028-b454-6122e2139f5c'
  },
  {
    id: '2e37c623-a535-4eb1-ae5b-6eaf7f4039c3',
    name: 'ConfirmTravel',
    referenceName: 'Confirm travel',
    description: null,
    priority: '1',
    processInstanceId: '40ab14f0-3a10-4ffd-96e1-05b0028943b4',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Ready',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-07-30T09:00:20.832Z',
    excludedUsers: [],
    potentialGroups: ['group2'],
    potentialUsers: [],
    inputs:
      '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null},"GroupId":"group2"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T09:00:20.835Z',
    endpoint:
      'http://localhost:8080/travels/40ab14f0-3a10-4ffd-96e1-05b0028943b4/ConfirmTravel/2e37c623-a535-4eb1-ae5b-6eaf7f4039c3'
  },
  {
    id: '3c1d6da4-436a-4728-bc24-9a69781bcbac',
    name: 'ConfirmTravel',
    referenceName: 'Confirm travel',
    description: null,
    priority: '1',
    processInstanceId: 'e1d4b174-a9b5-465b-b142-018df18d87d8',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Ready',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-07-30T09:00:23.698Z',
    excludedUsers: [],
    potentialGroups: ['group2'],
    potentialUsers: [],
    inputs:
      '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null},"GroupId":"group2"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T09:00:23.701Z',
    endpoint:
      'http://localhost:8080/travels/e1d4b174-a9b5-465b-b142-018df18d87d8/ConfirmTravel/3c1d6da4-436a-4728-bc24-9a69781bcbac'
  },
  {
    id: '86ddb2c7-c8e1-435f-a274-a8b0eb066ac1',
    name: 'ConfirmTravel',
    referenceName: 'Confirm travel',
    description: null,
    priority: '1',
    processInstanceId: 'b8eebfe7-45f4-4ce7-9019-1740222b302a',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Ready',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-07-30T09:01:12.65Z',
    excludedUsers: [],
    potentialGroups: ['group2'],
    potentialUsers: [],
    inputs:
      '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null},"GroupId":"group2"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T09:01:12.655Z',
    endpoint:
      'http://localhost:8080/travels/b8eebfe7-45f4-4ce7-9019-1740222b302a/ConfirmTravel/86ddb2c7-c8e1-435f-a274-a8b0eb066ac1'
  },
  {
    id: '9e1e0601-f7bd-4ad3-88ca-57afc9e3cf9d',
    name: 'ConfirmTravel',
    referenceName: 'Confirm travel',
    description: null,
    priority: '1',
    processInstanceId: '0c469bbf-988b-44e0-8fc9-90286500c519',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Ready',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-07-30T09:01:14.412Z',
    excludedUsers: [],
    potentialGroups: ['group2'],
    potentialUsers: [],
    inputs:
      '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null},"GroupId":"group2"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T09:01:14.416Z',
    endpoint:
      'http://localhost:8080/travels/0c469bbf-988b-44e0-8fc9-90286500c519/ConfirmTravel/9e1e0601-f7bd-4ad3-88ca-57afc9e3cf9d'
  },
  {
    id: 'a3eefa9a-51b0-4820-bc99-94c370389ed5',
    name: 'ConfirmTravel',
    referenceName: 'Confirm travel',
    description: null,
    priority: '1',
    processInstanceId: '718f44c2-e574-482c-9a24-60d17e474dde',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Ready',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-07-30T09:01:16.421Z',
    excludedUsers: [],
    potentialGroups: ['group2'],
    potentialUsers: [],
    inputs:
      '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null},"GroupId":"group2"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T09:01:16.426Z',
    endpoint:
      'http://localhost:8080/travels/718f44c2-e574-482c-9a24-60d17e474dde/ConfirmTravel/a3eefa9a-51b0-4820-bc99-94c370389ed5'
  },
  {
    id: 'aa9f477c-5172-4913-956a-6c76f7278207',
    name: 'VisaApplication',
    referenceName: 'Apply for visa',
    description: '',
    priority: '1',
    processInstanceId: 'fe523245-05e2-4a0c-abf7-a774cfe9d3f9',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Completed',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: '2020-07-30T09:22:16.417Z',
    started: '2020-07-30T08:59:55.64Z',
    excludedUsers: [],
    potentialGroups: ['group1'],
    potentialUsers: [],
    inputs:
      '{"trip":{"city":"New York","country":"US","begin":"2019-12-09T23:00:00.000+01:00","end":"2019-12-14T23:00:00.000+01:00","visaRequired":true},"TaskName":"VisaApplication","NodeName":"Apply for visa","Priority":"1","Skippable":"true","traveller":{"firstName":"Jan","lastName":"Kowalski","email":"jan.kowalski@example.com","nationality":"Polish","address":{"street":"polna","city":"Krakow","zipCode":"32000","country":"Poland"}},"GroupId":"group1"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T09:22:16.446Z',
    endpoint:
      'http://localhost:8080/travels/fe523245-05e2-4a0c-abf7-a774cfe9d3f9/VisaApplication/aa9f477c-5172-4913-956a-6c76f7278207'
  },
  {
    id: '99bb167f-144a-42fb-8f40-b80f34f5bed9',
    name: 'ConfirmTravel',
    referenceName: 'Confirm travel',
    description: '',
    priority: '1',
    processInstanceId: '28f63147-b948-4a63-acce-ec2c5c5f15ca',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Aborted',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-07-30T08:59:44.749Z',
    excludedUsers: [],
    potentialGroups: ['group2'],
    potentialUsers: [],
    inputs:
      '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null},"GroupId":"group2"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T09:32:14.556Z',
    endpoint:
      'http://localhost:8080/travels/28f63147-b948-4a63-acce-ec2c5c5f15ca/ConfirmTravel/99bb167f-144a-42fb-8f40-b80f34f5bed9'
  },
  {
    id: '2f8e0452-b50d-40f8-a657-b32c812828ef',
    name: 'ConfirmTravel',
    referenceName: 'Confirm travel',
    description: '',
    priority: '1',
    processInstanceId: '53923218-2a54-40c5-8b01-872d8dd2ec67',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Completed',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: '2020-07-30T09:40:26.896Z',
    started: '2020-07-30T08:59:47.779Z',
    excludedUsers: [],
    potentialGroups: ['group2'],
    potentialUsers: [],
    inputs:
      '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null},"GroupId":"group2"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T09:40:26.901Z',
    endpoint:
      'http://localhost:8080/travels/53923218-2a54-40c5-8b01-872d8dd2ec67/ConfirmTravel/2f8e0452-b50d-40f8-a657-b32c812828ef'
  },
  {
    id: '5ac50f25-192c-4719-9847-f9b8bdfe3381',
    name: 'VisaApplication',
    referenceName: 'Apply for visa',
    description: '',
    priority: '1',
    processInstanceId: '8e0eb71c-b5a3-44a3-9b82-d786781a6598',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Completed',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: '2020-07-30T09:43:29.625Z',
    started: '2020-07-30T08:59:58.565Z',
    excludedUsers: [],
    potentialGroups: ['group1'],
    potentialUsers: [],
    inputs:
      '{"trip":{"city":"New York","country":"US","begin":"2019-12-09T23:00:00.000+01:00","end":"2019-12-14T23:00:00.000+01:00","visaRequired":true},"TaskName":"VisaApplication","NodeName":"Apply for visa","Priority":"1","Skippable":"true","traveller":{"firstName":"Jan","lastName":"Kowalski","email":"jan.kowalski@example.com","nationality":"Polish","address":{"street":"polna","city":"Krakow","zipCode":"32000","country":"Poland"}},"GroupId":"group1"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T09:43:29.628Z',
    endpoint:
      'http://localhost:8080/travels/8e0eb71c-b5a3-44a3-9b82-d786781a6598/VisaApplication/5ac50f25-192c-4719-9847-f9b8bdfe3381'
  },
  {
    id: 'e878bca4-84f6-46a3-a864-9632ab490cab',
    name: 'ConfirmTravel',
    referenceName: 'Confirm travel',
    description: '',
    priority: '1',
    processInstanceId: 'a413fc40-b192-4879-94aa-dc84d0394f67',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Aborted',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-07-30T09:00:13.404Z',
    excludedUsers: [],
    potentialGroups: ['group2'],
    potentialUsers: [],
    inputs:
      '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null},"GroupId":"group2"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T09:44:00.082Z',
    endpoint:
      'http://localhost:8080/travels/a413fc40-b192-4879-94aa-dc84d0394f67/ConfirmTravel/e878bca4-84f6-46a3-a864-9632ab490cab'
  },
  {
    id: '61676d8f-56b7-4bc3-bd40-4c905d4ab176',
    name: 'ConfirmTravel',
    referenceName: 'Confirm travel',
    description: null,
    priority: '1',
    processInstanceId: '90a4d7db-c41f-4e01-b6b1-201be823bc07',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Ready',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-07-30T12:57:33.309Z',
    excludedUsers: [],
    potentialGroups: ['group2'],
    potentialUsers: [],
    inputs:
      '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null},"GroupId":"group2"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T12:57:33.318Z',
    endpoint:
      'http://localhost:8080/travels/90a4d7db-c41f-4e01-b6b1-201be823bc07/ConfirmTravel/61676d8f-56b7-4bc3-bd40-4c905d4ab176'
  },
  {
    id: '0a65028e-c02b-41f9-9260-5b703fb27a27',
    name: 'ConfirmTravel',
    referenceName: 'Confirm travel',
    description: null,
    priority: '1',
    processInstanceId: 'fdc72f2c-41fe-440e-bbf6-22510fa4766d',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Ready',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-07-30T13:05:52.696Z',
    excludedUsers: [],
    potentialGroups: ['group2'],
    potentialUsers: [],
    inputs:
      '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null},"GroupId":"group2"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T13:05:52.699Z',
    endpoint:
      'http://localhost:8080/travels/fdc72f2c-41fe-440e-bbf6-22510fa4766d/ConfirmTravel/0a65028e-c02b-41f9-9260-5b703fb27a27'
  },
  {
    id: '5fe852de-8d00-4197-9936-3842c648fee1',
    name: 'ConfirmTravel',
    referenceName: 'Confirm travel',
    description: null,
    priority: '1',
    processInstanceId: 'b4096227-2c8a-463f-a7a9-776027f77bf4',
    processId: 'travels',
    rootProcessInstanceId: null,
    rootProcessId: null,
    state: 'Ready',
    actualOwner: null,
    adminGroups: [],
    adminUsers: [],
    completed: null,
    started: '2020-07-30T13:08:20.509Z',
    excludedUsers: [],
    potentialGroups: ['group2'],
    potentialUsers: [],
    inputs:
      '{"flight":{"flightNumber":"MX555","seat":null,"gate":null,"departure":"2019-12-09T23:00:00.000+01:00","arrival":"2019-12-14T23:00:00.000+01:00"},"TaskName":"ConfirmTravel","NodeName":"Confirm travel","Priority":"1","Skippable":"true","hotel":{"name":"Perfect hotel","address":{"street":"street","city":"New York","zipCode":"12345","country":"US"},"phone":"09876543","bookingNumber":"XX-012345","room":null},"GroupId":"group2"}',
    outputs: '{}',
    lastUpdate: '2020-07-30T13:23:26.824Z',
    endpoint:
      'http://localhost:8080/travels/b4096227-2c8a-463f-a7a9-776027f77bf4/ConfirmTravel/5fe852de-8d00-4197-9936-3842c648fee1'
  }
];