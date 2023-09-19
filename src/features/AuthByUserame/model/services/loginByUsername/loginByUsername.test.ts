import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { loginByUsername } from "./loginByUsername";

describe("loginByUsername.test", () => {
    test("success login", async () => {
        const userValue = { username: "123", id: "1" };
        const testAsyncThunk = new TestAsyncThunk(loginByUsername);
        testAsyncThunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await testAsyncThunk.callThunk({ username: "123", password: "123" });

        expect(testAsyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(testAsyncThunk.dispatch).toHaveBeenCalledTimes(3);
        expect(testAsyncThunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userValue);
    });

    test("error login", async () => {
        const testAsyncThunk = new TestAsyncThunk(loginByUsername);
        testAsyncThunk.api.post.mockReturnValue(Promise.resolve({ status: 500 }));
        const result = await testAsyncThunk.callThunk({ username: "123", password: "123" });

        expect(testAsyncThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(testAsyncThunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
