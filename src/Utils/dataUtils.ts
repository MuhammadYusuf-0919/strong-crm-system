/**
 * Filters an array of client data to retrieve entries created by a specific user.
 * @param {string} id - The id of the user who contacted clients.
 * @param {Array} data - An array containing client data.
 * @returns {Array} - An array of client entries created by the specified user.
 */
 export const contactedFunc = (id: string, data: Array<any> = []): Array<any> => {
    // Use optional chaining to check if 'data' is defined or not
    const filterData = data?.filter((item) => item.createdBy === id);
  
    // Return the filtered data
    return filterData || [];
  };
  
  /**
   * Retrieves a user profile from the given data array based on the provided id.
   * @param {number} id - The id of the user profile to retrieve.
   * @param {Array} data - An array containing user profiles.
   * @returns {Object|undefined} - The user profile matching the id, or undefined if not found.
   */
  export const userProfile = (id: number, data: Array<any> = []): any | undefined => {
    // Using the find method to search for an item with the specified id
    return data.find(item => item.id === id);
  };
  
  /**
   * Finds an item in the given data array by matching the provided ID.
   * @param {number} id - The ID to search for.
   * @param {Array} data - The array of items to search within.
   * @returns {Object | undefined} - The found item or undefined if not found.
   */
  export const createdByFind = (id: number, data: Array<any> = []): any | undefined => {
    // Use the Array.find method to find an item with the matching ID.
    const foundItem = data.find((item) => item.id === id);
  
    // Return the found item or undefined if not found.
    return foundItem;
  };
  