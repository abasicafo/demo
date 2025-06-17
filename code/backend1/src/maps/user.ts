// backend1/src/maps/user.ts
// This file maps user-related column names to their display names.
// It is used to provide a user-friendly representation of user data in the application.
// This file is part of the backend1/src/maps directory, which contains various mappings used across the application
// to translate between different representations of data, such as database column names and user-friendly
// display names. The user-related mappings defined in this file are used in various parts of the application,
// including user interfaces, APIs, and data processing, to ensure that user data is presented consistently
// and correctly across the application. By using a mapping file, the application can easily change the
// display names of user-related fields without affecting the underlying data structure or logic, improving maintainability
// and readability of the codebase.
import { userDetails } from '../enums/user';

export const userColumnToNameMap = {
  [userDetails.FIRST_NAME]: 'First Name',
  [userDetails.LAST_NAME]: 'Last Name'
};
