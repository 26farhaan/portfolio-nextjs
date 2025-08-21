/**
 * This function wrapp promise and return it as a [response, error] array
 *
 * @param promise
 * @returns {Response}
 */
const promiseWrapper = async <Response, Err = unknown>(
  promise: Promise<Response>
): Promise<[Response | null, Err | null]> => {
  try {
    const response = await promise;

    return [response, null];
  } catch (error: Err | any) {
    return [null, error];
  }
};

// export default async function promiseWrapper<T extends any, R extends any>(
//     promise: Promise<T>
// ): Promise<[T | null, R | null]> {
//     try {
//         const response = await promise;

//         return [response, null];
//     } catch (error: R | any) {
//         return [null, error];
//     }
// }

export default promiseWrapper;
