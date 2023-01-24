// This could be made better/more efficient but it's for testing so it won't be worth it.
// It turns this: ' Set-Cookie: SSID=1234; HttpOnly; Expires='some date string' '
// into this: { ssid: '1234', httponly: true, expires: 'some date string' }

export const formatCookie = (a: string): any =>
  a
    // Remove 'Set-Cookie' header text
    .split(':')
    .slice(1)
    // Remove spacing from previous step and split items into own groups
    .map((item) =>
      item
        .trim()
        .split(';')
        // This seperates the value from the key. SSID='1234' -> ['SSID', '1234']
        .map((item) => item.trim().split('='))
    )
    // Create the object (flattened to bring depth from 3 to 2)
    .flat(1)
    .reduce(
      (acc, item) => ({
        ...acc,
        [`${item[0]}`.toLowerCase()]: item[1] ?? true,
      }),
      {}
    );
