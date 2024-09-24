import "./App.css";
import Hotel from "./Components/Hotel";

function App() {
  return (
    <>
      <h1>Resort Life</h1>
      <hr size="20px"></hr>
      <div className="row">
        <Hotel
          location="Indonisia"
          image="src\images\1.jpg"
          hotelname="Gili Air Hotel"
          price="$589/Night"
          above4={true}
          rating="4.8 ★"
        />
        <Hotel
          location="Seychelles"
          image="src\images\2.jpg"
          hotelname="Hilton Resort"
          price="$629/Night"
          above4={true}
          rating="4.2 ★"
        />
        <Hotel
          location="US Virgin Islands"
          image="src\images\3.jpg"
          hotelname="Goa Resort"
          price="$485/Night"
          rating="3.5 ★"
        />
        <Hotel
          location="Bahamas"
          image="src\images\4.jpg"
          hotelname="Kuredu Resort"
          price="$729/Night"
          above4={true}
          rating="4.1 ★"
        />
        <Hotel
          location="Mauritius"
          image="src\images\5.jpg"
          hotelname="Trou D'eau Douce"
          price="$877/Night"
          above4={true}
          rating="4.9 ★"
        />
        <Hotel
          location="Bermuda"
          image="src\images\6.jpg"
          hotelname="Staniel Cay Hotel"
          price="$365/Night"
          rating="3.2 ★"
        />
      </div>
    </>
  );
}

export default App;
