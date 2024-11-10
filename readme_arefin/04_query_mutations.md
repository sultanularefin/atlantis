

## Question:

Redux toolkit's query vs mutations



## answer:

In Redux Toolkit's **RTK Query**, both **queries** and **mutations** are mechanisms for interacting with external data sources (like APIs). They have different roles based on the type of interaction they represent with your API or backend. Here's a breakdown of the differences:

### 1. **Query**
A **query** is used to retrieve or fetch data from a server. It is essentially a GET request, and its primary goal is to fetch and cache data.

**Key characteristics:**
- **Fetching data:** Queries are typically used to request information, like fetching a list of users or a product detail from a server.
- **Caching:** Query responses are automatically cached, meaning repeated queries with the same parameters will pull data from the cache unless the cache is invalidated.
- **Automatic re-fetching:** Query data can be re-fetched automatically based on triggers (e.g., when a component mounts, after a mutation updates data).
- **Selectors:** Queries allow you to use selectors to access cached data without needing to re-fetch unless necessary.

**Usage Example (query):**
```javascript
const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
    }),
  }),
});

export const { useGetUsersQuery } = api;
```

### 2. **Mutation**
A **mutation** is used to modify data on the server. It is used for operations like creating, updating, or deleting data (i.e., POST, PUT, DELETE requests).

**Key characteristics:**
- **Modifying data:** Mutations are used for creating, updating, or deleting resources.
- **No caching:** Unlike queries, mutations do not cache their responses. They represent actions that modify the state, so caching would often not be appropriate.
- **Manual refetching:** After a mutation, you may need to manually trigger a refetch of relevant queries to update the client with the new data.
- **Side effects:** Since mutations change data, you might trigger side effects, like showing a success message or redirecting after a successful data change.

**Usage Example (mutation):**
```javascript
const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (newUser) => ({
        url: '/users',
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = api;
```

### Key Differences Between Query and Mutation
| Feature               | **Query**                              | **Mutation**                          |
|-----------------------|----------------------------------------|---------------------------------------|
| **Purpose**            | Fetching (GET requests)                | Updating (POST, PUT, DELETE requests) |
| **Caching**            | Automatically cached                   | No caching                           |
| **Refetch behavior**   | Automatic re-fetching when necessary   | Requires manual refetching            |
| **Data**               | Typically reads data                   | Typically writes data                 |
| **Side Effects**       | None (just data fetching)              | Often triggers side effects           |

In summary, use **queries** when you want to fetch and cache data, and use **mutations** when you need to perform data updates or other actions that change the state of your backend or API.
