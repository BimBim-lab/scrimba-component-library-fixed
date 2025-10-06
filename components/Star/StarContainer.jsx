import Star from "./Star"

export default function StarContainer() {
    function handleStarChange(newState) {
    console.log("Star state changed to:", newState);
  }
    return (
        <div style={{display: "flex", gap: "10px"}}>
            <Star onChange={handleStarChange} />
            <Star onChange={handleStarChange} />
            <Star onChange={handleStarChange} />
        </div>
    )
}