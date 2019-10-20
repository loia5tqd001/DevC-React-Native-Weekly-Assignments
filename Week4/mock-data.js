// article instruction: https://dev.to/znick1982/how-to-fake-your-api-for-todo-list-5e85
// api url: "https://api.fake.rest/e4cca0e3-40a4-45bf-81a7-13f3245e435e/GetTodolist"

export function getKey (item) {
  return item.task + item.createdDate
}

export function compareItem (item1, item2) {
  return getKey(item1) === getKey(item2)
}

export function findIndex (store, item) {
  return store.findIndex(it => compareItem(item, it))
}

const data = [
  {
    task: "input hack installation",
    createdDate: "2019-10-19T23:07:32.571Z",
    isCompleted: false,
    description:
      "Republic of Korea Soap Games Corporate transmit background Integrated morph overriding Boliviano Mvdol Handcrafted Branding Refined Granite Soap Awesome Metal Pizza Rubber Toys stable framework architect Crossroad"
  },
  {
    task: "calculate Cambridgeshire THX",
    createdDate: "2019-10-20T05:19:29.871Z",
    isCompleted: false,
    description:
      "index District Representative driver Horizontal data-warehouse collaborative program Personal Loan Account eco-centric virtual cross-platform Algeria deposit Avon emulation backing up copying Saint Helena Pound web-enabled"
  },
  {
    task: "Credit Card Account Tuna connecting",
    createdDate: "2019-10-19T20:44:54.907Z",
    isCompleted: false,
    description:
      "Cambridgeshire FTP compress transform Berkshire drive Mills payment Finland Direct Computer online JBOD hacking programming Wooden implement regional Tools transmit"
  },
  {
    task: "disintermediate teal Officer",
    createdDate: "2019-10-20T06:18:23.672Z",
    isCompleted: true,
    description:
      "Fresh Bacon Tasty Concrete Tuna HTTP back up Chair Rupiah global Operative Planner Home Loan Account firewall Borders ubiquitous Rustic Fresh Shoes cyan Human payment Infrastructure payment"
  },
  {
    task: "models Hawaii optimize",
    createdDate: "2019-10-20T01:27:39.193Z",
    isCompleted: true,
    description:
      "Infrastructure Cotton mint green Cross-platform synthesize Incredible Fresh Towels Outdoors utilize Robust Ergonomic Money Market Account e-commerce Bedfordshire deposit Orchestrator panel Turkey matrix Robust Analyst"
  },
  {
    task: "Flats Fish mindshare",
    createdDate: "2019-10-19T16:50:31.369Z",
    isCompleted: false,
    description:
      "Secured mobile superstructure Profit-focused THX Table Bedfordshire Producer partnerships East Caribbean Dollar input interface Kids Mountain back up Fiji transmit HDD full-range Investment Account"
  },
  {
    task: "Cape Verde Escudo Cambridgeshire syndicate",
    createdDate: "2019-10-19T23:58:59.464Z",
    isCompleted: false,
    description:
      "Customizable hybrid needs-based deposit backing up Small Checking Account Granite Russian Ruble Shoal Supervisor JSON Engineer District Borders Global deposit District pink Denar"
  },
  {
    task: "Usability withdrawal plum",
    createdDate: "2019-10-19T15:40:23.642Z",
    isCompleted: true,
    description:
      "Practical Response Nicaragua Liechtenstein Exclusive Senior Operative connect Berkshire Pants Cambridgeshire Village productize Shirt primary Soft Chief Soft payment Human"
  },
  {
    task: "flexibility Plastic networks",
    createdDate: "2019-10-20T03:34:33.703Z",
    isCompleted: false,
    description:
      "Sleek Junction THX Sports Small Wooden red haptic GB matrices Unbranded Money Market Account firewall transmitting bluetooth Quality-focused lavender overriding Regional synthesizing"
  },
  {
    task: "Directives neural synergize",
    createdDate: "2019-10-19T16:31:15.994Z",
    isCompleted: true,
    description:
      "haptic Analyst bottom-line reinvent XML Administrator auxiliary Program impactful XML Avon monitor Illinois Credit Card Account Mali Granite copy FTP partnerships payment"
  }
]

export default data