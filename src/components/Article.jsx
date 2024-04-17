// Article component
function Article({ date, title, image, content }) {
  return (
    <article>
      <time datetime={date}>{date}</time>
      <h2><a href="#">{title}</a></h2>
      <img src={image} alt="fashion photo" />
      <p>{content}</p>
      <p className="more"><a href="#" className="continue-link">Continues...</a></p>
    </article>
  );
}

export default Article;