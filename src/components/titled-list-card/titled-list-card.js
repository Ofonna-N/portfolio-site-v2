import "./_titled-list-card.scss";

function TitleListCard({ title, list = ["React", "Unity"] }) {
  const listDisplay = list.map((item, i) => {
    return (
      <li key={i} className="title-list-card__list-item">
        {item}
      </li>
    );
  });

  return (
    <div className="title-list-card">
      <h2 className="title-list-card__title">{title || "Title"}</h2>
      <hr className="title-list-card__line" />
      <ul className="title-list-card__list">{listDisplay}</ul>
    </div>
  );
}

export default TitleListCard;
