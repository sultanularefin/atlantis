

## question: I am RTK query's Query endpoint builder to fire a get reuqest in a react native
TypeScript application. How can i see the api request made like in browsers "Network tab".


## answer:


In React Native, unlike in browsers where you can inspect network requests directly in the **Network tab** of developer tools, there are a few alternative ways to see API requests made using **RTK Query**. Here's how you can inspect network requests in a **React Native TypeScript application**:

### 1. **Use React Native Debugger**
**React Native Debugger** is an all-in-one tool that provides network inspection similar to the browser's DevTools.

#### Steps to inspect network requests:
1. **Install React Native Debugger:**
   You can download React Native Debugger from its [GitHub repository](https://github.com/jhen0409/react-native-debugger/releases) and install it on your machine.

2. **Open React Native Debugger:**
   Start the React Native Debugger and link it with your application by running the following command:

   ```bash
   open "rndebugger://set-debugger-loc?host=localhost&port=8081"
   ```

   This connects the debugger to the local React Native Metro Bundler.

3. **Enable Network Inspect in React Native Debugger:**
   Once React Native Debugger is open and connected to your app, go to the **Network** tab to view all API requests made, including the requests fired by **RTK Query**.

4. **Inspect API Requests:**
   Here, you'll see a list of all network requests, including details such as:
    - URL
    - Request method (GET, POST, etc.)
    - Response status
    - Response body
    - Headers

### 2. **Using Flipper (Official Debugging Tool for React Native)**
Flipper is another tool that offers network inspection for React Native applications.

#### Steps to inspect network requests with Flipper:
1. **Install Flipper:**
   Download Flipper from its [official website](https://fbflipper.com/).

2. **Set up React Native App for Flipper:**
   If you're using React Native 0.62 or above, Flipper should already be integrated. If not, ensure your app is set up for Flipper by following the setup guide [here](https://fbflipper.com/docs/features/react-native).

3. **Open Flipper and Connect to Your App:**
   Launch Flipper and connect your **emulator/device** to Flipper. The app should appear in the list of running apps.

4. **Enable Network Plugin:**
   In Flipper, go to the **Network** plugin to start viewing network requests.

5. **Inspect Requests:**
   Similar to the browser's Network tab, Flipper's Network plugin will show all outgoing API requests, including their URL, method, response, and headers.

### 3. **Using Axios Interceptors (If You Use Axios Under RTK Query)**
If you're using **Axios** as a base for your RTK Query service, you can log requests manually by adding an **interceptor**:

```ts
import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
});

axiosInstance.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
});

export default axiosInstance;
```

If you're not using Axios directly, you can use **RTK Query's middleware** or monitor requests using the dev tools mentioned above.

### 4. **Console Logging in RTK Query Middleware (For Debugging)**

You can also log requests made by RTK Query by adding middleware or using the `onQueryStarted` lifecycle method to track the requests. Here's how you can do it:

```ts
const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getData: builder.query<DataType, void>({
      query: () => '/data',
      onQueryStarted: async (arg, { queryFulfilled }) => {
        try {
          console.log('Fetching data...');
          const { data } = await queryFulfilled;
          console.log('Data fetched:', data);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      },
    }),
  }),
});
```

This will log the request information and the response data or error to the console, providing a manual way to monitor your API calls.

### Summary:
- Use **React Native Debugger** or **Flipper** for inspecting network requests like you would in a browser's Network tab.
- For more control, you can use Axios interceptors (if using Axios) or add logging in **RTK Query**'s `onQueryStarted` lifecycle or middleware.



