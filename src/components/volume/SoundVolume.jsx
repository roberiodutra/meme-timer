import "./SoundVolume.css";

export default function SoundVolume(vol, volume) {
  return (
    <section className="volume">
      <input type="range" min={0} max={1} step={0.5} value={volume} onChange={vol} />
    </section>
  );
}
