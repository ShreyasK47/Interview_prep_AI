import { Headings } from "@/components/headings";
import { InterviewPin } from "@/components/pin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/config/firebase.config";
import type { Interview } from "@/types";
import { useAuth } from "@clerk/clerk-react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export const Dashboard = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(false);
  const { userId } = useAuth();

  useEffect(() => {
    if (!userId) return;
    setLoading(true);

    const interviewQuery = query(
      collection(db, "interviews"),
      where("userId", "==", userId)
    );

    const unsubscribe = onSnapshot(
      interviewQuery,
      (snapshot) => {
        const interviewList: Interview[] = snapshot.docs.map((doc) => {
          const id = doc.id;
          return {
            id,
            ...doc.data(),
          };
        }) as Interview[];
        setInterviews(interviewList);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching interviews:", error);
        toast.error("Something went wrong", {
          description: "Unable to load your interviews. Try again later.",
        });
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex w-full items-center justify-between">
        <Headings
          title="Dashboard"
          description="Create, manage, and review your AI-powered mock interviews."
        />
        <Link to={"/generate/create"}>
          <Button size="sm" className="gap-1">
            <Plus className="w-4 h-4" />
            Add New
          </Button>
        </Link>
      </div>

      <Separator />

      {/* Content */}
      <div className="md:grid md:grid-cols-3 gap-6 py-6">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <Skeleton
              key={index}
              className="h-28 md:h-36 rounded-xl bg-gray-200"
            />
          ))
        ) : interviews.length > 0 ? (
          interviews.map((interview) => (
            <InterviewPin key={interview.id} interview={interview} />
          ))
        ) : (
          <div className="md:col-span-3 flex flex-col items-center justify-center text-center py-16">
            <img
              src="/assets/svg/not-found.svg"
              className="w-40 h-40 object-contain mb-6"
              alt="No data"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              No Interviews Yet
            </h2>
            <p className="max-w-md text-sm text-gray-500 mt-2">
              You haven’t created any mock interviews. Start by generating one
              and practice with real-time AI feedback.
            </p>
            <Link to={"/generate/create"} className="mt-6">
              <Button className="gap-1">
                <Plus className="w-4 h-4" />
                Create Interview
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
