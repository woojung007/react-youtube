import axios from 'axios';

export default class FakeYoutube {
    constructor() {}

    async search(keyword) {
        // # : private 함수 - 클래스 외부에서는 호출할 수 없다.
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    // private
    async #searchByKeyword() {
        return axios
            .get(`/videos/search.json`)
            .then((res) => res.data.items)
            .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
    }

    async #mostPopular() {
        return axios.get(`/videos/popular.json`).then((res) => res.data.items);
    }
}
