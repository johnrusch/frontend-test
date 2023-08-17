import OrganizationBar from "~/components/OrganizationBar";
import ReviewSearch from "~/components/ReviewSearch";
import ReviewList from "~/components/ReviewList";
import type { Review } from "~/types";
import { redirect, type LoaderArgs } from "@remix-run/node";
import { requireUserSession } from "~/utils/session.server";

const reviews: Review[] = [
  {
    profileLink: "/manage-profile/details/emergency-department?bc=rev",
    profileTitle: "Emergency Department",
    reviewDetailsLink: "/manage-profile/review-details/1548591",
    rating: 1,
    reviewText: "(NO GOOD AT ALL)",
    status: "PEND",
    publishDate: "---",
    reviewDate: "May 31, 2023",
    createdDate: "Jun 6, 2023",
  },
  {
    profileLink: "/manage-profile/details/emergency-department?bc=rev",
    profileTitle: "Emergency Department",
    reviewDetailsLink: "/manage-profile/review-details/1548586",
    rating: 1,
    reviewText:
      "After this visit I have sworn to myself to never come back to UConn. The nurse barely glanced at my tooth, and when a dentist came to check on me she dismissed them saying I was taken care of. The nurse was rude, unprofessional, and in the end completely useless. Today I will go to a different hospital to get done what you were either incapable of, or indifferent to. Terrible, awful experience, and shame on you for hitting this person who wouldn't even identify herself. Condescending, dismissive, and horrible at her profession..",
    status: "PEND",
    publishDate: "---",
    reviewDate: "May 28, 2023",
    createdDate: "Jun 6, 2023",
  },
];

export async function loader({ request }: LoaderArgs) {
  return await requireUserSession(request);
}

const Reviews = () => {
  return (
    <>
      <section className="row content">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>
                <i className="fa fa-star"></i> Reviews
              </h2>
            </div>
          </div>
          <ReviewSearch />
          <div className="row">
            <div className="col mb-1">
              Found <strong>13679345</strong> matching results
              <button className="btn btn-outline-none export-csv-btn btn-link btn-sm float-right">
                <i className="fa fa-download"></i>Export CSV
              </button>
            </div>
          </div>
          <ReviewList reviews={reviews} />
        </div>
      </section>
    </>
  );
};

export default Reviews;
