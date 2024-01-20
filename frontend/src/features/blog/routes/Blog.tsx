import { ContentLayout } from "@/components/Layout";

export const Blog = () => {
    return (
        <ContentLayout title="Blog" description="色々書きます">
            <div className="pt-10">
                現在、投稿済みの記事はありません。
            </div>
        </ContentLayout>
    );
}