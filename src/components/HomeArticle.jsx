

function HomeArticle({ title='nofound', description, key}){
  return(
    <article className="art-home" key={key}>
          <header className="header-home">
            <h1>{title}</h1>
          </header>
          <div className="div-container-parraf-home">
            <p className="parraf-home">{description}</p>
          </div>
        </article>
  )
}

export default HomeArticle;