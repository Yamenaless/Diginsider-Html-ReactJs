const CaseStudies = () => {
  const [data, setData] = React.useState([]);
  const [error, SetError] = React.useState([]);

  React.useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await await fetch(
        "http://localhost:1337/api/case-studies?populate=*"
      );
      const json = await data.json();
      if (json.data != null) {
        setData(json.data);
      } else {
        SetError("No items found");
      }
    };

    dataFetch();
  }, []);

  console.log(data);
  return (
    <section className="case-studies-container">
      <div className="w-layout-blockcontainer case-studies-wrapper w-container">
        <div className="w-dyn-list">
          <div role="list" className="collection-list w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              {data.map((item) => {
                return (
                  <a key={item.id} href="#" className="cs-card w-inline-block">
                    <div
                      style={{
                        backgroundImage: `url("${"http://localhost:1337"}${
                          item.attributes.thumbnail.data.attributes.url
                        }")`,
                      }}
                      className="cs-thumbnail"
                    ></div>
                    <h1>{item.attributes.name}</h1>
                    <h3></h3>
                  </a>
                );
              })}

              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const domContainer = document.querySelector("#caseStudies");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(CaseStudies));
