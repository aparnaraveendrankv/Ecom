const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 41344,
    colors: [
      {
        code: "black",
        img:'data:image/jpeg;base64,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'
      },
      {
        code: "darkblue",
        img: "https://s1.dswcdn.com/media/x490/Nike_Air_Force_Shoes/Air_Force_1_Low/Nike_Air_Force_1_Low_AF1_07_LTHR_Dark_Blue_AJ7280-402.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 43844,
    colors: [
      {
        code: "lightgray",
        img: "https://5.imimg.com/data5/SELLER/Default/2021/12/YY/RE/UZ/24989634/air-jordan-1-mid-light-smoke-grey-product-1000x1000.jpg",
      },
      {
        code: "green",
        img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/380883c5-b4ee-4501-b802-f9b62be12785/womens-air-jordan-1-lucky-green-release-date.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 9295,
    colors: [
      {
        code: "lightgray",
        img: "data:image/jpeg;base64,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",
      },
      {
        code: "green",
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTERISFRUXFRUWGRUXFRUWFhYVFRUYGBUVFRUYHSggGBslGxYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHSUtKzErLS0tLSstLS0tKzcrKystLS0tLS0tLS0rKystLS0tLS4rLS0tLS0rLS0tKy0tLf/AABEIALwBDAMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAgEDBAUGB//EAEcQAAEDAQQGBgcFBQcEAwAAAAEAAgMRBBIhMQUGQVFhcSIygZGx8BMUUpKhwdEHQlNiciMzgqLSQ0STssLh8SRzo9MVFhf/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIEAwX/xAAlEQEAAgIBBAIBBQAAAAAAAAAAAQIDETEEIUFREhMyFCJSYYH/2gAMAwEAAhEDEQA/APTUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERVaK4BBRFJ7CDQiiigIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgK3o+ZzpzQuaxnRoGEiRxAJJddIDRUZEGoNcBjfibUiuW1abXHWcMj9DZnsMjzdc8OFImfeIp9/YBszOVDJSb1rG7NXpnXxwtT2NY11nY65eHWdI396RXAgYtwObDvWZLrbZxk2Z3H0ZaP5yF5++QRgNjFABSuZoMqcP9+JWHPbXCpLnHgKEuJyaO1NuH9RffZ6ZZdcLG83TIWOoDR4umhyPJbez2yN/Ue13AHHnReM+sPaKEgk4uqAQSc67xs5AKcdoaMW3ozWtYzQe5i3tpVNtR1M+Ye1IvMrHrNa2AXJWSCuUmB5A417aLZw68TgAyWOQ/8AbHpPhGXed+abe1eopLukXIw6+w5PimYdtWOFOJBHA+csmLXqwu/tQOdPGvLvVb+2nt0qKjHAgEGoIqDvByKqj0EREBERAREQEREBERAREQEREBERAREQEREBEXL60aZcL0UZc2gN5w6xNK3RuwKMZLxSNy0msml/TyyxtkqyN1wAHAObSt6nErk7cZ2GlI8djScudFfZAGM9LELoIbhdu3m/p345nlvWILQ9zyHNIYG1DiRW9UC7TPeeFBvWXy7btaZkALa4kudSuPRBx6ternjUq3Gam9XDG7xr1nDwHAcVWV1TTeMTjgw4UwP3vAFHy+cEaQkeVZdIql/mqtPO5FiFxsyzLPbnDIkdq1qpeQ+L0fUDTsjpXMLzT0RO04te0Cp2YOOHErtnWoOPSAdzAPivLfs8r6y7hC7Hm+Neh1KsO7B+DcNkDhUItboO3iVtWiguxuzr1wTTsoVslXsIiICIiAiIgIiICIiAiIgIiICIiAiIgIqOcAKk0AxJ2Ab1oLdrTG3CNpcdhPRB40zIxGxGbXrXmU9PawiElrA0uaKuJ6o4c15+bc6+900hcZXX2uN0YgAFoAwAAaKduay9JW6j3GTN9XbKE/eHOmznuK1VuuzRj2SAQa7sKjdtWXzsmSbz34LRbxIKA1DcxhgcVgP2Hfg0Z1O/gN5SRrGNwyrs6z3UpntOHwVIjSrnUvHdsHshGeFAwN4k5nefkMsFjyNOz51V97lbLvOCELICEI9REm/z2o0oUCqKFVuIOx+zmMekmduYwe85x/0LuqLjPs6c39sK9LoHmKv78TxzC7QLTuw/hDD1OiLPSNIoLsJGzBzS4jsc5w7F0ixrC7NZKPSI1GhERFEREBERAREQEREBERAREQEVHOAFSaAbdy1M+slnbWji4jcDj2lGbXrXmW3JWp01poQ9FoDnkdjeLuPBcppK3vlfVzhSpN01IAoaAbtmPBam22lzRVoLqA1aASdlKAYmmOA3qbcl+p8VhsdI2uWWt977poaXiAbpqKNBpnTMUWpfpqMloB6TgaDi3Fw7KHuVPWXOjaXAsJFaGoIrvGw/VayWdjekborUAkC9jmG7TlkFHNuZnuyppr1b1CNxAPwWJJaQ0CNrWmgo2NuFBxIwaOWK3mhNV7RaTekDoIfaOE0tfYaR+zbj1iK7gVqtIxwxyPZAKRhxAq68SW9Em9THEHNG5xzWu5YVzpXnUL8sBQNG5o8+Ci9Sc5WyalGUFAlXS3moFqKgolqkqURUQ1TaodiqCgzLNanxuDmOLXDaD2fILcs1wtQpi0/w/wC65svpuV+xxySuuQsdI/c0ZDe52TRxNAi1m0dodtq5rnM+eGF7Y6SPukgY0INKY55L0ZeYWLVw2eN1okN6WK7KLtbkYjcHODfbcWhwJyoSANp9Oa4EAjI4jkclXbi+UR+5VERV6iIiAiIgIiICIiAijJIGgucQAMySABzJXO2zWxgJETQ4YgOLqNJyBFMwjF8lacy6RaXSescceDB6Q8CA3v29i5u36YkeCHSOxr0W4NHA0z2rS2W1SULpA0GvRANcN6m3Lfqv4t3pzWQlg9KWxszoCcSK51zC1kszS3AdYV44/Na+02gHrNvNzN6l3DGpLsFjP0lXBgc/i0Ub77qAjPKqjmmbW7ymwvDyXyEggANpQjfz2btqjaraxuBNDhhm845Box+Cx3h7us4MG5mJ5F5x7gFcZBGwVY0A41JoSeJOZ89hOxZIJp3hkUZBdlWjnnebvVaBvccF3urepUcDvSyn0s2dSCQ0/lvZmuRIplQbVttW9DNs8QFAXuAMjt5zug+yMqbc1tXFXTvxYdd7csfSMpZG9za1DHkY4k3TvzXjLzXpb86Cgqc6Yr2w4jPw8F5zp3UyVr3OswD2uJPo6tD2Y1o29QOaDShBrQ5JJ1FJtEacmQqhvnBStEEkZLXxyNO5zHNyzwIWOZ/OPgo49SyDRW3gKsUMjupFI7b0WOdhyAK2Fn1ftb+rZpc/vt9H8ZCAixWWruKBYums+plqJF8wRj8z7x5AMDht3/Jbiz6hx1/aTSPpTBrRGK45klxIw2UOKrcYbz4edvNFs7BoK0zAFkRDSK33kMbTfUmpHIHavTLHoKzQC8yJjS2vSIL3++/Hu3rYWZtBV3XPSO0jh2CgrtxO1NPevT+5cVozUJudpeXn2GVYyvF56ThyDV1NisEcTLkTGtbndaABl1nb8syVgaY1rssFW3/SyD+zj6Rrj1n9VuzjwXD6U1itVpqHO9FGT+7jqMM+k/N3nBGpvjx8Oi1i1taKwWZ155q10o6kYycGH7z9lcguu1OtfpLHCdrWmM84yWfIHtXjkcQbl9F6b9mlorBKz2Zajk9jT4hyPPFlm2Tu69ERV1iIiAiLXaQ0xHGbtbztw2cyEZtaKxuWxRcvaNMyHEOIFRgKUGWG9YVq0o5wxkdyqQO4YKbeE9VWHYyTtb1nNHMhYNp01G3q1ceGA7SVx77aNgWv0rPMQ0RODcauJAdXCoFPj5Kbec9VM8M7TWkRLJekq4DqR1qxvG4MCeLqnlkudt4jqHkltHX+k4NZWudMzjjQbQktklP7yd1McG3WDvaLw+OYpVRjsMLcQA4j7zqk54dIknjwrxUc0zudzKjLbe6jXv4hoY3f1n49wKEzHNzGfpF9woajpvw7mq7U7/BW3k7/AACM79LIs4zdV52FxLj2VwHYrjpdxQHZXgqXOPwQWya5ee5XLHOA4XsAC0muXRNa4VrtHarEjCoCoNR4lGoe6hwIqKd5PxVpy4fVXXNjA2C1uuUADJjW4W/da8nqkDCpwNM9/cBwIBbRwIzGIy3hafUreLRuFtQLu1TNPPniO9RdTzvrTxoEaW24ZEjhU084eaqBad7vh40UyQjTXKqCOJzLj2p6Mbvnspt5/FYds0tBGCXzRNpsL23vdBr8Forbr5Zm/uxLKd7W3BlgCX0PbdPJGZvWOZdVVQmnaxpc5wa0ZuJAAFcak4Lze3682l+ELGRDKvXdjuLujs9nYuetL5JTemkfIdl5xNNvRBwHYpt426iscO80vrtCHUiBmu0NGgtYXjEXpHDqjA9EGpplTHl9J6dtVowlkuM/Diqxv8Rzd2lYEbA0YKL3I5r5rWRbGG5CiuXlEFA1R5KALtfs0tFJ5Ge3EHdsbgPCQ9y4xq6TUSSltj/MJG/+Mu8WhVvFOrw9UREVfTFVoqaKiuQjFBXSej3OiIhcA7ea4imIqOrzoV51pOzTQE+mje0e0RVp/jGHxXpjHlXfS7wpp45cMZO+3kItwxxqDnQ48xy7VjTyUrR14YY7uY2f8r1S16AscvXgjqdoFw+8yhWql+z+xnGJ00R/LIHDkQ8E07U05p6Wzzhk1TnTzz80V20SYUDiP0nGvMH4jA54FdzN9nzLv7Och28xjHj0SKbO4LW2vUC0j93JC8biXtd3XSPjuU085wZI8ORo4/e7SAfE892wb1OUADqNPa8eB2VpybvW8dqdbmZQh3KSLwJBWBPoG2NONmm5hhcO9tUYmt48NWXj2R2OOzPM81YeWn7rq/rbTZl0anb8DtWXaLFM3rQSjnG8fJYRBGbSOYI8UT/FQwV+8MNwd8x+Xv50uOaMg7vFMt5BJG3ZsO5YzpBvClfG/wCKJuFwwn24/wCff+hWH2U1vAMJApe9IBgaEgNc4cMaKReN/nz4Ky+Qbx5/5RqJX3Wd7h1QaVGDmuy7VbhgtERJh9Yj2m56Ro7buaxnzgbR3+ePeUFrHtDsKLE64Z//ANot7MPWpR+oNP8AnCuO1vt2ZtLhsF2OM54ezlxWCy0uyqSN1T58hV9XLurHITvbG6vMhox+Kr0+dv7ZbtZLa7O0y9hDfABYlptUsn7ySR4PtPcRXcASeHepM0PaiaCy2k8oZcf5VlR6v20gj1O07M4nDEcTTefghMXn21kUIO1rcDnhXgMMSVFjVuW6qW85WSXvjHi5TbqfpE/3R/vxD/WifC3qWnaFcG76+C3cepGkT/dac5YP/Yr7NQ9IbYmDnLH8iUPrv6cy+RRvLqv/AM7t52QjnL9GlSb9mtu9uyjnJJ8oii/Vf05S9uU2OXYxfZlaj157OP0+kd4sasiP7L5dtsYOULneMgQ+i/pwrnrfaku/62D9T+70Mi6iH7MIx17VKf0sY3xvLbaF1Hs1mkbK1873trdvubQEtLTgxra4E5ppunT2i0TLfIiKu4V+y5kcFYVQUGYWIrLbSduKuCYb6IKogI3hVQVBUhIVBVCCRcnpCqBUQT9MUMxUEQDd2tb3BW3QRnOOM/wN+imlEFr1WL8GL3G/RPVYvwovcb9FdoqImoWxZo/w4/cb9FMMb7Le4KqIqodTLDkqmQ7yoqiCtVREQUoiqqIFUSqpVBWiUVKqiCtEUUogrRSDdqoEkPRKDGREQEREEXE7AsWd833Wj4LMRBoZ7TbR1Yz/ACrBk0jpEZRP7AF1iIOM/wDndJt/sJDzjB8FVutukRnYHO5MeD4ldkiDkm68WwdbRVoPFrj4FiyotfH/AH9F6SHFscbvF4XRog1kOt8Rzs1uZ+qyyH/JeWZFrBA7ZOOdmtI8Y1kIgk3ScR2u7Y5B4tUxbY9/8rvorKIL3rbN59130Q2tm8+676KyiC762z83uP8Aonrjfz+4/wCitIgueuM/P/hv+ip663c//Df9FBEEvXm+zJ7jvonro9mT3CooguC1Dc73SqG0jc7uKgiAbV+R/cPqoG1O/Df/AC/1KaILZtbvwn98f9Sp62/8F/fH/WrqILfrb/wn98f9ar6w78N3aWfJymiCBlk2NaObj8gqNMh6xbTcAT8cPBXEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 7466,
    colors: [
      {
        code: "black",
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhESEw8TFBIVFxUXERUVFxcSGBMSIBMYFhgWGBUZHyghGBolHxUVITEmKCkuLi4uGB8zODMsNygtLisBCgoKDg0OFg8PFy0dHSUrLi0tKy0tMSstKzU3LS0rKy03LTArKzctLTMrMC0tMTU3LSs3NTQrNzcuLS0rLSstL//AABEIAPsAyQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgMEBQcIAgH/xABEEAACAgEBBQUEBQgHCQAAAAABAgADEQQFEiExQQYHUWFxEyKRoTJCgbHBFCNSYnKS0fAXM0SCstLhFSRDU2ODk8Lx/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEDAv/EABwRAQEAAgIDAAAAAAAAAAAAAAABAhESMQMTIf/aAAwDAQACEQMRAD8A3RERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQESJ9p+011Vy0UU754e0fiRWSMjOAehHSRDtl3oX6Nqq61rd2963fUlUTkBhSCCxBwSeGOXGZ+ycuLT13jybbiRjsP220+0asoQl6j87STkr+sp+unn8cGSeaMyIlptXaNenqa211RFxxYhQWJwq5PUkgQLuJr7Z/aHWWOd5SifVbjlhx4+7hcngeGRz4nrhdu96b6LVV0lPa1gZvBOGBON1VbowHvYP6S8plj5ZbrTXLxWTbbcTE9nO0em11ftNPaGAxvqeD1nwZenryPQmZaasiIiAiIgIiICIiAiIgIiICIlntjalWmpsvvcJUgyxPH0AHVieAA5wLqywKCzEKqgliTgAAZJJPICaq7Ud7pVimg062Af8e7Irbl/V1ghnH6xIHDrzkY7c949+uRqqazTpiMMr7pa1eBzZ0UcPognzJ6QOg2jIGCOGM7w4YzzJOPszAlyd5OsyztRU/vZ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",
      },
      {
        code: "lightgray",
        img: "https://d2ob0iztsaxy5v.cloudfront.net/product/340684/3406846860_zm.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 6466,
    colors: [
      {
        code: "gray",
        img: "https://sneakernews.com/wp-content/uploads/2022/04/Nike-Space-Hippie-04-Grey-DQ2897-002-4.jpg",
      },
      {
        code: "black",
        img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/a930ca6f-284e-4095-9edb-dc6987270ea4/space-hippie-01-black-volt-this-is-trash-release-date.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
   
    wrapper.style.transform = `translateX(${-100 * index}vw)`;


    choosenProduct = products[index];

 
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

 
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});