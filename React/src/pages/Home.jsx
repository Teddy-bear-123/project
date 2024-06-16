
export default function Home() {
  console.log("Home component rendered"); // Debugging line
  return (
    <div>
      <h1>Home</h1>
      
      <a href="/login">Login</a> 
      <a href="/landing">Landing</a> 
      <a href="/userdash">UserDash</a> 
      <a href="/admindash">AdminDash</a> 
      <a href="/uploadform">UploadForm</a> 
      <a href="/404">404</a>
    </div>
  );
}

