---
description: 'React Native mobile application project documentation'
applyTo: ['**/*.ts', '**/*.tsx']
---

# Project Context

rzo_coeur_mobile_app is a mobile application built with React Native. This project is the frontend part of a project called "le reSOS du coeur" (Heart Networks), whose principle is similar to the "pending coffee" but for food products.

The principle of this application is that "Client" users can purchase products in partner stores ("Shop") using the mobile application and leave them on the shelf. When these items are paid for, they appear in the list of available products for the partner social center to which the store is linked. "Social Worker" users can then create baskets grouping several items from the same store and assign this basket to a "Recipient" user. The latter can then collect the items from the store and check out without paying for the products by showing the mobile application at the cashier.

This codebase is the front part of the project, coded in React Native using the Expo framework. It consumes the REST API from the backend part allowing the application to retrieve/update information stored in the database, authenticate users and so on. This application also consumes the REST API from "Open food facts" in order to retrieve informations on the products scanne by the users.

We distinguish the following different types of users:

- User:

  - Can create an account via the mobile application;
  - Can retrieve the list of stores available in the application;
  - Can scan multiple articles while shopping in one of the stores registered in the application;
  - Can buy the during checkout with the application (the products are still on the shelves of the store);

- Recipient:

  - Can register on the application after a social worker created an account for this user;
  - Can view all the baskets that have been assigned to him/her;
  - Can retrieve the articles of his/her basket without paying for them with the application;

- Cashier:

  - Can register on the application after the admin of the store created an account for this user;
  - Validates item purchases when a "Client" user checks out
  - Validates basket withdrawal when a "Recipient" user checks out
