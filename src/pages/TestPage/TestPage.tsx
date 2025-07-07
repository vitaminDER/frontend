import { useAppDispatch, useAppSelector } from "../../App/store/storeHooks.ts";
import { getPost } from "../../App/store/reducers/testReducer/testSelectors.ts";
import { useEffect } from "react";
import { fetchPost } from "../../App/store/reducers/testReducer/services.ts";

export const TestPage = () => {
  const dispatch = useAppDispatch();
  const { post, loadingStatus } = useAppSelector(getPost);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  const posts = post.map((el) => {
    return <div key={el.id}>{el.title}</div>;
  });

  return <div>{loadingStatus ? <div>load</div> : <div>{posts}</div>}</div>;
};
