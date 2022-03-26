import "./SoundVolume.css";

export default function SoundVolume(vol, volDisplay) {
  return (
    <section className="volume" style={{ display: volDisplay }}>
      <input type="range" min={0} max={1} step={0.02} onChange={vol} />
    </section>
  );
}
