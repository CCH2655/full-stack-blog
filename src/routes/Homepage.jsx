import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>·</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex justify-between items-center">
        {/* titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eum
          </p>
        </div>
        {/* animated button */}
        <Link to="write">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150 ,0"
              className="text-lg tracking-widest"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%"> Write your story ·</textPath>
              <textPath href="#circlePath" startOffset="50%"> Write your idea ·</textPath>
            </text>
          </svg>
        </Link>
      </div>
      {/* FEATUTRED POSTS */}
      {/* POST LIST */}
    </div>
  )
}

export default Homepage