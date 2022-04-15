Q. How long did you spend on this coding assignment?

    I have spent around 8 hours on this coding assignment.

Q. What would you add to your solution if you had more time?

    I would add more styling to showcase some of my CSS skills while also making the app look better. For example, I would add some effects when the user hovers over the images, position the images in a row etc. I would also like to limit the amount of results rendered at once. Maybe render 5 to 10 books at a time and have the user navigate to the next page if they would like to see more results. Lastly, I would add error messages to increase the user experience and communicate with the user if there was an issue fetching results.

Q. How would you track down a performance issue in production? Have you ever had to do this?

    For me, I would use the network panel in my dev tool. This tool will analyze the network activity and will detect possible causes. It would allow me to better pin point what exactly is causing my network to slow down and may allow me to make changes in order to solve the root issue.

Q. How would you improve the API that you just used?

    There are a couple things that come to mind. The first thing I would do is reduce the amount of data sent per request. I believe there is a lot of unnecessary data that is being sent for each book whenever a fetch request is made and limiting this would make the API even faster. I would also make changes to the documentation to make it easier to read for developers. When you look through the documentation, it is almost as if everything is just thrown there and there is no real flow to navigating the documentation.

Q. Pleases describe yourself using correctly formatted JSON

```yaml
{
  "name": "David Ghazi",
  "phone": "416-206-8776",
  "email": "davidaghazi@gmail.com",
  "role": "Front- End Developer",

  "about me": "I offer over 2 years of experience as a Front- End Developer, specializing in HTML, CSS, JavaScript and React. I worked as a Front- End Developer at Civic Tech Toronto for nearly two years. Civic Tech is an organization that introduces the tech world to underprivileged kids. I was fortunate enough to be working with a team of developers to build a responsive and accessible static website for this organization using React, Gatsby and Material-UI. Currently, I am a Software Developer for a startup company called Grype Digital. At Grype, I am part of the software development team that is building new membership portals for clients using the MERN (MongoDB, Express, React, Node)stack. When I am not coding, I am most likely doing       some sort of physical activity, preferably outside :)",

  "socialLinks":
    [
      { "name": "linkedin", "url": "https://www.linkedin.com/in/davidaghazi/" },
      { "name": "github", "url": "https://github.com/dghazi12" },
      { "name": "personal website", "url": "https://www.davidghazi.com/" },
    ],
}
```
