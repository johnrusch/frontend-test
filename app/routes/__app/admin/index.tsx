import ReviewRatingBreakdown from "~/components/ReviewRatingBreakdown";
import ReviewStatusBreakdown from "~/components/ReviewStatusBreakdown";
import ProfileStatusBreakdown from "~/components/ProfileStatusBreakdown";
import { redirect, type LoaderArgs } from "@remix-run/node";
import type { Breakdown, ReviewStatus, ProfileStatus } from "~/types";
import { requireUserSession } from "~/utils/session.server";

const breakdown: Breakdown = {
  rating1Percentage: 20,
  rating1Count: 50,
  rating2Percentage: 15,
  rating2Count: 30,
  rating3Percentage: 10,
  rating3Count: 25,
  rating4Percentage: 30,
  rating4Count: 75,
  rating5Percentage: 25,
  rating5Count: 60,
};

const exampleReviewStatus: ReviewStatus = {
  PUBL: 234,
  SCHED: 12,
  APPR: 89,
  PEND: 57,
  FLAG: 3,
  ARCH: 18,
  total: 413,
  reviewStatusBreakdownScheduleEnabled: true,
  reviewStatusBreakdownApprovedEnabled: false,
};

const profileStatus: ProfileStatus = {
  LIVE: 120,
  OFFLINE: 45,
  PUB: 70,
  PRV: 50,
  DIS: 20,
  isVpsUser: false,
  profileStatusBreakdownUrlPrefix: "/profile/status/breakdown",
};

export async function loader({ request }: LoaderArgs) {
  try {
    const session = await requireUserSession(request);
    const credentials = session.get("credentials");
    const user = credentials?.user;
    if (user?.role !== "SYS_ADMIN") {
      return redirect("/dashboard");
    }
    return user;
  } catch (error) {
    return redirect("/sign-in");
  }
}

export default function AdminDashboard() {
  return (
    <>
      <section className="row content">
        <div className="container d-flex flex-column">
          <h2 className="mb-3">
            <i className="fa fa-bolt"></i> Admin Dashboard
          </h2>

          <ul className="nav nav-tabs ">
            <li className="nav-item">
              <a className="nav-link active" href="/admin?dest=org">
                Organization
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/admin?dest=ds">
                DocScores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/admin?dest=vit">
                Vitals
              </a>
            </li>
          </ul>

          <div className="row my-4">
            <div className="col-lg-4 pb-lg-0 pb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Rating Distribution</h4>
                  <ReviewRatingBreakdown
                    url=""
                    reviewRatingBreakdown={breakdown}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 pb-lg-0 pb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Rating Status</h4>
                  <ReviewStatusBreakdown
                    url=""
                    reviewStatus={exampleReviewStatus}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 pb-lg-0 pb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">Profile Status</h4>
                  <ProfileStatusBreakdown profileStatus={profileStatus} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
