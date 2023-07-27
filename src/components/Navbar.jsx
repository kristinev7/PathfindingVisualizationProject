import React, { useContext } from "react";
import { GridContext } from "../context/gridContext";
import { FaPlay, FaRegClone } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";

export default function Navbar({
    handleClick,
    error,
    setMirrorGrids,
    mirroredGrids,
}) {
    const { visualize } = useContext(GridContext);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {error && (
                    <div className="error-msg">
                        <FiAlertTriangle size={25} />
                        <p> Choose Algorithms</p>
                    </div>
                )}
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="c1"
                        className="chk-btn"
                        onChange={() => setMirrorGrids(!mirroredGrids)}
                        disabled={visualize}
                    />
                    <label htmlFor="c1">
                        Mirror Walls
                        <FaRegClone size={18} />
                    </label>
                </div>

                <button
                    className="btn nav-button"
                    onClick={handleClick}
                    disabled={visualize}
                >
                    Visualize
                    <FaPlay size={14} className="nav-button-icon" />
                </button>
            </div>
        </nav>
    );
}
