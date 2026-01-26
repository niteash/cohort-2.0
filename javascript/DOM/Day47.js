// var arr = [10, 20, 23, 44, 55];

// var sum = 0;
// arr.forEach((x) => {
//   sum = sum + x;
//   console.log(sum);
// });

let card = document.getElementsByClassName("card");

let body = document.querySelector("body");
let main = document.querySelector(".main");

const users = [
  {
    fullName: "Aarav Sharma",
    description:
      "A passionate frontend developer who loves building clean and responsive web interfaces.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    profession: "Frontend Developer",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    fullName: "Priya Verma",
    description:
      "Creative UI/UX designer focused on user-centered design and smooth user experiences.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "UI/UX Designer",
    tags: ["Figma", "Adobe XD", "UX Research", "Prototyping"],
  },
  {
    fullName: "Rahul Mehta",
    description:
      "Backend engineer who enjoys designing scalable APIs and database systems.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Backend Developer",
    tags: ["Node.js", "Express", "MongoDB", "REST API"],
  },
  {
    fullName: "Sneha Kapoor",
    description:
      "Data analyst with strong skills in turning raw data into meaningful insights.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    profession: "Data Analyst",
    tags: ["Python", "Pandas", "SQL", "Data Visualization"],
  },
];
var sum = "";

users.forEach((x) => {
  sum =
    sum +
    `  <div class="card">
        <div class="img-cont">
          <img
            src="${x.image}"
            alt=""
            class=""
          />
        </div>
        <div class="detail">
          <h1>${x.fullName}</h1>
          <h2>${x.profession}</h2>
          <p>
           ${x.description}
          </p>
          <p>${x.tags}</p>
        </div>
      </div> `;
});

main.innerHTML = sum;
