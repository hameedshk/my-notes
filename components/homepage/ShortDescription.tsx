const ShortDescription = () => {
  return (
    <div className="mb-4 mt-4">
      <p>
        Welcome to my blog! As a seasoned <span className="text-blue-500">Product Owner</span> and{' '}
        <span className="text-blue-500">software developer</span>, I combine 3 years of leadership in{' '}
        <span className="text-[rgb(16, 145, 179)]">Agile </span>
        teams with a deep passion for programming in{' '}
        <a target="_blank" href="https://dotnet.microsoft.com/en-us/" rel="noreferrer">
          <span className="text-[rgb(255,98,0)]">.NET</span>
        </a>{' '}
        and{' '}
        <a target="_blank" href="https://angular.dev/" className="text-[rgb(0,184,26)]" rel="noreferrer">
          Angular.
        </a>
      </p>
      <p>
        With strong system design expertise, I explore how robust architecture and user-driven development can transform
        digital experiences.You can view my experience here <a
          target="_blank"
          href="https://hameedshk.github.io/my-notes/resume"
          className="text-[rgb(100,80,150)]"
          rel="noreferrer"
        >resume.</a>
      </p>
      <p>
        Join me as I share insights, best practices, and lessons learned from building innovative software solutions
        that balance technical excellence and customer needs.
      </p>
      <p>
        You can me contact me on{' '}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/syedhameed/"
          className="text-[rgb(153,50,204)]"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        . I'm always available to connect over email!
      </p>
    </div>
  );
};

export default ShortDescription;
