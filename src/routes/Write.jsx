import { useUser } from "@clerk/clerk-react"

const Write = () => {

  const { isLoaded, isSignedIn}  = useUser()

  if(!isLoaded){
    return <div className="">Loading...</div>;
  }

  if(isLoaded && !isSignedIn){
    return <div className="">You should login!</div>;
  }

  return (
    <div className=''>
      <h1>Create a New Post</h1>
      <form action="">
        <button>Add a cover image</button>
        <input type="text" placeholder="My Awesome Story" />
        <div className="">
          <label htmlFor="">Choose A category:</label>
          <select name="" id="">
            <option value="general">General</option>
            <option value="web-design">Web Desing</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
          <textarea name="desc" placeholder="A short Description" />
        </div>
      </form>
    </div>
  )
}

export default Write