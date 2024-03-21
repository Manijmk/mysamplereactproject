export async function SaveSchema(body) {
    try {
      const response = await fetch(
        `https://webhook.site/12a7834d-d577-4d1d-81fb-56a3e96de967`,
        {
            method: `POST`,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
      );
      if (response.status === 200) {
        return await response.json();
      } else if (
        response.status === 401 ||
        response.status === 400 ||
        response.status === 404
      ) {
        return await response.json();
      } else if (response.status === 403) {
        return await response.json();
      } else {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (error) { }
  }