const API_URL = "https://fakestoreapi.com";

export const fetchProducts = async (limit = 20) => {
    try {
        const response = await fetch(`${API_URL}/products?limit=${limit}`);
        if (!response.ok) {
            throw new Error("Không thể lấy danh sách sản phẩm");
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Lỗi khi lấy danh sách sản phẩm: ${error.message}`);
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/products/${id}`);
        if (!response.ok) {
            throw new Error("Không thể lấy thông tin sản phẩm");
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Lỗi khi lấy thông tin sản phẩm: ${error.message}`);
    }
};

export const fetchProductsByCategory = async (category) => {
    try {
        const response = await fetch(
            `${API_URL}/products/category/${category}`
        );
        if (!response.ok) {
            throw new Error("Không thể lấy danh sách sản phẩm theo danh mục");
        }
        return await response.json();
    } catch (error) {
        throw new Error(
            `Lỗi khi lấy danh sách sản phẩm theo danh mục: ${error.message}`
        );
    }
};

export const fetchCategories = async () => {
    try {
        const response = await fetch(`${API_URL}/products/categories`);
        if (!response.ok) {
            throw new Error("Không thể lấy danh sách danh mục");
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Lỗi khi lấy danh sách danh mục: ${error.message}`);
    }
};

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        if (!response.ok) {
            throw new Error("Đăng nhập không thành công");
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Lỗi khi đăng nhập: ${error.message}`);
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error("Đăng ký không thành công");
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Lỗi khi đăng ký: ${error.message}`);
    }
};
