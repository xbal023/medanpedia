import { fetch } from "undici";
import { URLSearchParams } from "url";
import {
  Data,
  Options,
  Profile,
  Services,
  Status,
  Order,
  Refill,
  RefillStatus,
  PProfile,
  PServices,
  PStatus,
  POrder,
  PRefill,
  PRefillStatus,
} from "./types";
import { join } from "path";

/**
 * Medan Pedia Cokk
 * Code base: https://github.com/bolaxd
 * Don't claim this code without License
 */

export class MedanPedia {
  /**
   * Constructor medan pedia / data include & option
   * @param {string} [id] - ID profile pada medan pedia
   * @param {string} [key] - key / apikey medan pedia
   * @param {T<Options>} [options] - opsional parameter yaitu url method dll
   */
  constructor(
    private id: string,
    private key: string,
    public options: Options = {}
  ) {
    this.options.url = this.options.url ?? "https://api.medanpedia.co.id";
    this.options.method = this.options.method ?? "POST";
  }

  private async _request<T, C>(path: string, payloads: C): Promise<Data<T>> {
    return new Promise(async (resolve, reject) => {
      const result = await fetch(`${this.options.url}${path}`, {
        method: this.options.method,
        body: new URLSearchParams({
          api_id: this.id,
          api_key: this.key,
          ...payloads,
        }),
      })
        .then((res) => res.json())
        .then((data) => resolve(data as Data<T>))
        .catch((e) => reject);
    });
  }

  /**
   * Mengeset URL API ( set ini berguna ketika anda lupa mengeset option di contructor nya)
   * @param {string} [url] - URL berupa string url medan pedia [base url api]
   * @return {this}
   * @example
   * const medan = new MedanPedia(id, key)
   * medan.setUrl('httpd://medanpeda.co.id')
   * medan....
   */
  public setUrl(url: string): this {
    this.options.url = url;
    return this;
  }
  /**
   * Mengeset POST API ( set ini berguna ketika anda lupa mengeset option di contructor nya)
   * @param {string} [method] - method berupa post, saat ini method hanya tersedia POST
   * @return {this}
   * @example
   * const medan = new MedanPedia(id, key)
   * medan.setMethod('POST')
   * medan....
   */
  public setMethod(method: string): this {
    this.options.method = method;
    return this;
  }
  /**
   * getProfile - profile / cek balance
   * @return {Promise<Profile | string>}
   */
  public async getProfile(): Promise<Profile | string> {
    const result = await this._request<Profile, PProfile>("/profile", {});
    if (result.status) return result.data;
    else return result.data;
  }

  /**
   * getServices - Service list (mendapatkan list service)
   * @param {boolean} [serviceFav] - Optional parameter service fav (service yang diambil dari favorit)
   * @return {Promise<[Services] | []>}
   */
  public async getServices(serviceFav?: boolean): Promise<[Services] | []> {
    const result = await this._request<[Services], PServices>("/services", {
      service_fav: serviceFav,
    });
    if (result.status) return result.data;
    else return [];
  }

  /**
   * getOrder - memesan pada layanan service
   * @param {number} [service] - service id didapatkan dari getServices
   * @param {string} [target] - target berupa username / url / id tujuan
   * @param {number} [quantity] - qty / quantity / jumlah pesanan
   * @param {string} [customComments] - optional params custom comments
   * @param {string} [customLink] - optional params custom link
   * @return {Promise<Order | string>}
   */
  public async getOrder(
    service: number,
    target: string,
    quantity: number,
    customComments?: string,
    customLink?: string
  ): Promise<Order | string> {
    const result = await this._request<Order, POrder>("/order", {
      service,
      target,
      quantity,
      custom_comments: customComments,
      custom_link: customLink,
    });
    if (result.status) return result.data;
    else return result.data;
  }

  /**
   * getStatus - mendapatkan status pesanan
   * @param {number} [orderId] - Order id didapatkan pada saat getOrder
   * @return {Promise<Status | string>}
   */
  public async getStatus(orderId: number): Promise<Status | string> {
    const result = await this._request<Status, PStatus>("/status", {
      id: orderId,
    });
    if (result.status) return result.data;
    else return result.data;
  }

  /**
   * refill - refill adalah mengulang pesanan / order ulang di target yg sama
   * @param {number} [orderId] - Order id didapatkan pada saat getOrder
   * @return {Promise<Refill | string>}
   */
  public async refill(orderId: number): Promise<Refill | string> {
    const result = await this._request<Refill, PRefill>("/refill", {
      id_order: orderId,
    });
    if (result.status) return result.data;
    else return result.data;
  }

  /**
   * refillStatus - refill status digunakan untuk mengecek apakah refill berhasil atau tidak
   * @param {number} [refillId] - refill id didapatkan pada saat refill
   * @return {Promise<RefillStatus | string>}
   */
  public async refillStatus(refillId: number): Promise<RefillStatus | string> {
    const result = await this._request<RefillStatus, PRefillStatus>(
      "/refill_status",
      {
        id_refill: refillId,
      }
    );
    if (result.status) return result.data;
    else return result.data;
  }
}

export default MedanPedia;
