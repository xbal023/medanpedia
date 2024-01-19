import { MedanPedia } from "../src/index";

describe("Testing Medan Pedia", function () {
  const medan = new MedanPedia("21760", "573665-06c611-87ca7b-c39502-fd7846");
  it("should support balance check", async function () {
    const res = await medan.getProfile();
    console.info(res);
  });

  it("should support get service list", async function () {
    const res = await medan.getServices();
    console.info(res);
  });

  it("should support get order", async function () {
    const res = await medan.getOrder(1886, "bolaxd", 1000);
    console.info(res);
  });

  it("should support get status", async function () {
    const res = await medan.getStatus(102837);
    console.info(res);
  });

  it("should support refill", async function () {
    const res = await medan.refill(102837);
    console.info(res);
  });

  it("should support refill status", async function () {
    const res = await medan.refillStatus(201);
    console.info(res);
  });
});
