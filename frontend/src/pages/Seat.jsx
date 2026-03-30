import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Seat.css";

function Seat() {
  const rows = ["A", "B", "C", "D", "E"];
  const cols = [1, 2, 3, 4, 5, 6];

  const alreadyBooked = ["A3", "B2", "C5", "D1", "E4"];

  const [selectedSeat, setSelectedSeat] = useState(null);
  const [bookedSeats, setBookedSeats] = useState(alreadyBooked);

  const handleSeatClick = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) return;
    setSelectedSeat(seatNumber);
  };

  const handleReserve = () => {
    if (!selectedSeat) {
      alert("Please select a seat first");
      return;
    }

    setBookedSeats([...bookedSeats, selectedSeat]);
    alert(`Seat ${selectedSeat} reserved successfully`);
    setSelectedSeat(null);
  };

  return (
    <>
      <Navbar />

      <div className="seat-page">
        <section className="page-hero">
          <div className="page-hero-overlay">
            <p className="page-subtitle">CHOOSE • RESERVE • STUDY</p>
            <h1 className="page-title">Library Seating</h1>
            <p className="page-description">
              Reserve your preferred study space and enjoy a smooth,
              distraction-free library experience.
            </p>

            <div className="page-hero-buttons">
              <button className="primary-btn">Reserve Now</button>
              <button className="secondary-btn">View Layout</button>
            </div>
          </div>
        </section>

        <div className="legend">
          <span><div className="box available"></div> Available</span>
          <span><div className="box selected"></div> Selected</span>
          <span><div className="box booked"></div> Reserved</span>
        </div>

        <div className="seat-layout-wrapper">
          <div className="seat-container">
            {rows.map((row) => (
              <div key={row} className="row">
                <span className="row-label">{row}</span>

                {cols.map((col) => {
                  const seatNumber = `${row}${col}`;
                  const isBooked = bookedSeats.includes(seatNumber);
                  const isSelected = selectedSeat === seatNumber;

                  return (
                    <div
                      key={seatNumber}
                      className={`seat ${isBooked ? "booked" : ""} ${isSelected ? "selected" : ""}`}
                      onClick={() => handleSeatClick(seatNumber)}
                    >
                      {seatNumber}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="info-box">
          <h3>Selected Seat: {selectedSeat || "None"}</h3>
          <button onClick={handleReserve}>Reserve Seat</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Seat;