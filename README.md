Learning react from nameste react by Akshay Saini.

Day 1 : Learned about react fundamental like (history, versions, modules, npm,) etc. Learned to use react using CDN(Content dilivery networks) link. Made some elements using react (no JSX).

Day 2 : Learned about npm, modules, and installed react and reactDOM using npm. Learned about bundlers (Parcel specifically) , what it dose and what modules and ways it uses to do those things. Learned about package.json and package-lock.json, difference between these and what they do. Learned about browserslist, how to specify it manually.

Day 2 : Learned about JSX, how to use it and why to use it and it have HTML like structure. Learned about React Components and how to use it. Learned how to use JavaScript inside a Component (JSX), by using { Code }.

Day 3 : Learned about conditional rendering, Early return, useState hook and useEffect hook. Made restaurant card and rendered it with swiggy api live data, created search bar and searching restaurant by name.

Day 4 : Learned about react-router-dom, this library is used for client side rendering, gives us some usefull hooks to render different components on same page.
Made api call for getting restaurant menu and rendering menu in /restaurant/:id component (using dynamic url).

Day 5 : Learned about Class base components (componentDidMount, componentDidUpdate, ComponentWillUnmount, this.state, this.params). Learned how to make custom hooks, and created hooks that returns restaurant data, restaurant Menu data, and useOnline (tells that user is online or not, using browser api). Created restaurant offer cards, and rendered recomended items(food items). Created helper.js (utils) and put helper functions (filterRestaurantData) and done code cleaning (removing events on component unmount), and learned about things like render phase, commit phase and unmount phase.

Day 6 : Learned about lazy loading (Chuncking, Code Spliting, Dynamic Bundling, On demand loading, etc...), how to use Suspence to lazy load component.
Learned about tailwind css, configure tailwind, removed all css and used tailwindcss class.
Learned about a package named react slick, it is used to make sliders, made Top Picks Slider and Offers Section Slider using react slick and made accordion of menu categories.

Day 7 : Learned how to drill props. Props drilling is way to pass data to child components.
Learned about "Lifting the state up". This is the way to give control of children components state using parent. Made a custom accordian using the lifting the state up, only one accordian onens at a time if another is opened all other collapse.
Learned about React dev tools. React dev tools have two sections Components and Profiler. Components shows all the components tree and profiler records what we do in our app and shows how much time all the things are taking and this tells that where should we optimize our application.
Learned about Context. Context is a hook which allow us to make a peice of data accessible anywhere in our app. To make and use is hook known as createContext
to create context and useContext to use context data. To use context data in class based component we can use <contextName.Consmer> {JSX} </ contextName.Consumer>. To update data of context we use Provider as contextName.Provider. React dev tools don't shows context name, to see name of context we use DisplayName as contextName.DisplayName.

Day 8 : Learned about Redux, @reduxjs/toolkit and react-redux. Understand about "Reducers, Actions, Store, Slice, provider, useDispatch, Subscribing to store" etc.
Created store using configureStore() and created cart slice using createSlice(). Created reducers and actions in cart slice and exported reducer using default export and actions by name export. Provided cart slice to the store. Provided store to complete app using AppLayout component using <Provider store = {store}>
Created cart component, in menuCart component added a addItem action to add item to cart, and rendered cart. In cart added clear cart action, remove item action, and in header shown number of items in cart using selector and also In menu , made search working.

Day 9 : Learned about testing in react, using react testing library and jest. Why is testing important, different type of testing. Installed @testing-library/react, jest and jest-enviroument-jsdom, configred jest, created a folder **test**.
Learned how to test js file and react componets, Intigrated testing of components.
Learned how to mock things in jest (mocking data, mocking fetch using global.fetch ). Learned how to create tests what and how to expect in tests. Learned how to find specific element in virtual DOM and done some tests.
