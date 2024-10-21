# SportSee - sport analytics dashboard

SportSee is an application that provides users with a personalized dashboard displaying analytics of their sports activities. It tracks sport sessions, daily weight, calories burned, and offers a score reflecting progress toward fitness goals — helping users stay motivated on their health journey.

This app was developed as part of the [OpenClassrooms](https://openclassrooms.com/) curriculum.

## Overview

### Screenshot

![](/assets/screenshot.png)

### The challenge

Users should be able to:

- View personalized graphics and scores
- Interact with graphics to display tooltips

### Links

- Live Site URL: [See the live page here](https://sport-see-tawny.vercel.app/user/18)

## My process

### Built with

- **React.js** for building the user interface
- **React Router** for setting up dynamic routing based on user ID
- **Recharts** library for data visualization
- **External API** for fetching server data
- **CSS3** and **BEM methodology** for styling and maintainable code structure
- **Vercel** for seamless deployment and hosting

### What I learned

- **Create Advanced Charts**: Used Recharts library to create data visualizations
- **Interact with APIs**: Worked with web service to fetch data through endpoints
- **Develop API Call Service**: Created a dedicated API call service to ensure data quality by fetching and formatting data for use within the application
- **Test Data Consistency**: Implemented a toggle mechanism to switch between mocked and fetched data, allowing for testing of data handling by the API call service
- **Use React Hooks**: Used the `useEffect` to perform side effects, such as data fetching
- **Use React Router Build-in Components**: Used `Outlet` to handle nested routes
- **Follow React Best Practices**: Followed the principle of passing props from the parent component rather than adding conditional logic in child components
- **Understand Component Lifecicle**: Gained a better understanding of the component lifecycle in React, specifically the asynchronous nature of data fetching, which results in a component rendering twice. Ensured safe access to data by checking for undefined values before use:

```javascript
function Dashboard() {
  const [userData, setData] = useState();

  useEffect(() => {
    // fetch formatted data asynchronously when the component mounts or userId changes
    getFormattedData(Number.parseInt(userId, 10)).then((data) => {
      setData(data);
    });
  }, [userId]);
  // userData is initially undefined after the first render due to asynchronous data fetching

  return (
    // check for undefined before use to prevent errors
    <>
      <UserGreeting userName={userData?.firstName} />
      <ActivityChart sessions={userData?.sessions} />
      <ScoreChart todayScore={userData?.todayScore} />
    </>
  );
}
```

- **Run Backend**: Ran a provided backend locally
- **Apply Scoped Styling with CSS Modules**: Used `CSS Modules` for component-scoped styling, allowing one CSS file per component
- **Apply Project Structure**: Built a well-structured project, including components, pages, router, services, styles and images

### Continued development

- add utils to the project tree structure (`constants.js` containing mocked data, backend routes, etc.)
- remove hardcoded and repeated data in services to follow the DRY principle: first, set up routes in a separate file (`constants.js`), then simplify the code in `getData.js` by creating a single funciton with two parameters: `userId` and the ending part of the URL
- replace the function that formats data by a modeling class (OOP)
- move all inline styles from Rechart components into dedicated CSS files
