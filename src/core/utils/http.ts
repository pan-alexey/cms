export interface RequestError {
  error: Error;
  message: string,
  statusCode?: number,
  code?: string,
  canceled?: boolean,
}

export async function request<Payload>(): Promise<{
  payload: Payload | null,
  error: RequestError | null
}> {
  const result: {
    payload: Payload | null,
    error: RequestError | null
  } = {
    payload: null,
    error: null
  }

  try {
    const response = await fetch('http://127.0.0.1');
    const data = await response.json();
    result.payload = data as Payload;
    return result;
  } catch (error) {
    return result;
  }
}

// export function request<Payload>(url: string): Promise<{ payload: Payload | null, error: RequestError | null}> {
//   return fetch(url, config).then((response) => response.json())
//       .then((data) => {
//           const result = {
//               payload: data as Payload,
//               error: null,
//           }
//           return result;
//       })
//       .catch(error => {
//           return {
//               payload: null,
//               error,
//           }
//       })
// }