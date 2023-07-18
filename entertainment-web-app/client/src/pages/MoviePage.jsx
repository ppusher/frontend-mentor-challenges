import { useLoaderData } from "react-router-dom";

function MoviePage() {
  const mediaData = useLoaderData();
  let poster_size = "w185";
  const mediaDirector = mediaData.credits.crew.filter(
    (item) => item.job === "Director"
  )[0].name;
  const videoEmbedId = mediaData.videos.results.filter(
    (video) => video.name.includes("Trailer") && video.site === "YouTube"
  )[0];
  console.log(videoEmbedId);

  return (
    <section>
      <h1>{mediaData.original_title}</h1>
      <ul className="small_data">
        <li>
          <h2>Year</h2>
          <p>{mediaData.release_date.slice(0, 4)}</p>
        </li>
        <li>
          <h2>Rating</h2>
          <p>{mediaData.vote_average.toFixed(1)}</p>
        </li>
        <li>
          <h2>Runtime</h2>
          <p>{mediaData.runtime} mins</p>
        </li>
        <li>
          <h2>Language</h2>
          <p>English</p>
        </li>
      </ul>
      {/* TODO: Add <picture> to make it responsive with different poster_size ref API config  */}
      <img
        className="posterImg"
        src={`https://image.tmdb.org/t/p/${poster_size}/${mediaData.poster_path}`}
      />
      <div>
        <div className="video-player">
          <iframe
            src={`https://www.youtube.com/embed/${videoEmbedId.key}`}
            frameBorder="0"
            width="560"
            height="315"
            allowFullScreen
            title="Embedded video player"
            allow="accelerometer; clipboard-write; autoplay; encrypted-media"
          ></iframe>
        </div>
        <h2>Synopsis</h2>
        <p>{mediaData.overview}</p>
      </div>
      <div>
        <h2>Director</h2>
        <p>{mediaDirector}</p>
      </div>
      <div>
        <h2>Genres</h2>
        <ul>
          {mediaData.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Cast</h2>
        <ul>
          {mediaData.credits.cast.slice(0, 10).map((cast) => (
            <li key={cast.id}>{cast.original_name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MoviePage;
