// "use client"
import { expensiveFunction } from "@/expensiveFunction";
import Navbar from "@/components/navbar";
import Searchbar from "@/components/searchbar";
import Pagination from "@/components/pagination";

interface ImageAttributes {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

interface ImageObject {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: ImageAttributes;
  liked: boolean;
  alt: string;
}

interface ImageResponseInterface {
  page: number;
  per_page: number;
  photos: ImageObject[];
  total_results: number;
  next_page: string;
}

export default async function ServerPage() {
  // const [searchQuery, setSearchQuery] = useState("cars");
  // const [totalCount, setTotalCount] = useState(0);
  var searchKey = "cars";
  var totalCountTemp = 0;
  var pageIndex = 1;

  const photosTenp = [
    {
      src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=130",
      width: 800,
      height: 600,
    },
    {
      src: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&h=130",
      width: 1600,
      height: 900,
    },
  ];

  const photos = await fetch(
    `https://simple-pexels-proxy.onrender.com/search?query=${searchKey}&per_page=12&page=1`
  )
    .then((res) => {
      console.log({ res });
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // setTotalCount(data?.total_results)
      totalCountTemp = data?.total_results;
      pageIndex = data?.page;
      return data.photos;
    });
  const handleSearchKey = (keyValue) => {
    console.log("keyValue", keyValue);
  };
  expensiveFunction();
  console.log("Gallery");
  return (
    <>
      <Navbar />
      <Searchbar handleSearchKey={handleSearchKey} searchKey={searchKey} />
      <Pagination
        prefixString=""
        searchQuery={searchKey}
        totalCount={totalCountTemp}
        pageIndex={pageIndex}
      />
      <div style={{ backgroundColor: "#fff" }}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos &&
              photos.map((eachImage: any) => {
                var imageurl = `https://images.pexels.com/photos/${eachImage.id}/pexels-photo-${eachImage.id}.jpeg`
                return (
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={imageurl}
                    key={eachImage.id}
                    id={eachImage.id}
                  />
                );
              })}
          </div>
      </div>
      <div>
        <Pagination
          prefixString="Search Results for "
          searchQuery={searchKey}
          totalCount={totalCountTemp}
          pageIndex={pageIndex}
        />
      </div>
    </>
  );
}
