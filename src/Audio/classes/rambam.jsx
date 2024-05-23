// Rambam.jsx




function Rambam() {
  return (
    <>
    <div className='m-4'>
      <h1>Rambam Class</h1>
      <hr className="mt-4 mb-4" size="5"/>
      <div className="App">
        <AudioPlayer audioUrl={GetTodaysRambamChapter()} />
      </div>
    </div>
    </>
  );
}

export default Rambam;
