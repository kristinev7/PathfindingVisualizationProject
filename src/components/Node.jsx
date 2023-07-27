import React from "react";
import { FaFlagCheckered, FaMapMarkerAlt } from "react-icons/fa";

export default function Node({
    mouseDown,
    mouseEnter,
    mouseUp,
    node,
    gridName,
}) {
    const classes = node.startNode
        ? "start-node"
        : node.endNode
        ? "end-node"
        : node.isWall
        ? "wall"
        : "";
    const id = `${gridName}-${node.row}-${node.col}`;
    return (
        <div
            className={`node ${classes}`}
            id={id}
            onMouseDown={() => mouseDown(node)}
            onMouseEnter={() => mouseEnter(node)}
            onMouseUp={mouseUp}
        >
            {node.endNode ? (
                <FaFlagCheckered />
            ) : node.startNode ? (
                <FaMapMarkerAlt />
            ) : (
                ""
            )}
        </div>
    );
}
