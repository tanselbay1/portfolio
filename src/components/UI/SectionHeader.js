export default function SectionHeader({ title, span }) {
    return (
        <h2 className="title">
            {title}
            <span className="coloured"> {span}</span>
        </h2>
    );
}
