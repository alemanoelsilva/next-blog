const DarkTheme = () => {
  return (
    <style jsx global>{`
      /* Dark Theme */
      :root {
        --background-color: rgb(37, 37, 37);
        --link-color: rgb(218, 178, 0);
        --text-color: rgb(201, 201, 201);
      }  
    `}</style>
  )
}

export default DarkTheme