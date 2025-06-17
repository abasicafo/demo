// This file defines the User interface for the application.
// It specifies the structure of a User object, including the required fields such as id, firstName, and lastName.
// This interface is used throughout the application to ensure type safety and consistency when working with user data.
// It is typically used in TypeScript files to provide type annotations for user-related data structures.
// This file is part of the backend1/src/domain directory, which contains domain-specific logic and
// interfaces for the application. The User interface is a fundamental part of the domain model, representing
// the users of the application and their associated data. It is used in various parts of the application,
// including controllers, services, and data access layers, to ensure that user data is handled consistently
// and correctly across the application.
// backend1/src/domain/User.ts
// This file defines the User interface for the application.
// It specifies the structure of a User object, including the required fields such as id, firstName, and lastName.
// This interface is used throughout the application to ensure type safety and consistency when
// working with user data. It is typically used in TypeScript files to provide type annotations for
// user-related data structures. This file is part of the backend1/src/domain directory, which
// contains domain-specific logic and interfaces for the application. The User interface is a fundamental
// part of the domain model, representing the users of the application and their associated data.
// It is used in various parts of the application, including controllers, services, and data access layers,
// to ensure that user data is handled consistently and correctly across the application.
// This file is part of the backend1/src/domain directory, which contains domain-specific logic and
// interfaces for the application. The User interface is a fundamental part of the domain model,
// representing the users of the application and their associated data. It is used in various parts of the application,
// including controllers, services, and data access layers, to ensure that user data is handled
// consistently and correctly across the application.

export interface User {
  id: string;
  firstName: string;
  lastName: string;
}
