import * as firebase from 'firebase';
import { MemberData, MemberID } from '../components/Member';
import { ResolutionID, Vote, ResolutionData } from '../components/Resolution';
import { CommitteeID } from '../components/Committee';
import { AmendmentData } from '../components/Amendment';

export const voteOnResolution = (
  committeeID: CommitteeID, 
  resolutionID: ResolutionID,
  memberID: MemberID, 
  vote: Vote
  // tslint:disable-next-line
): Promise<any> => {

  const ref = firebase.database()
    .ref('committees')
    .child(committeeID)
    .child('resolutions')
    .child(resolutionID)
    .child('votes')
    .child(memberID)
    .set(vote);

  return ref;
};

export const postAmendment = (
  committeeID: CommitteeID, 
  resolutionID: ResolutionID,
  amendmentData: AmendmentData, 
): firebase.database.ThenableReference => {

  const ref = firebase.database()
    .ref('committees')
    .child(committeeID)
    .child('resolutions')
    .child(resolutionID)
    .child('amendments')
    .push();

  ref.set(amendmentData);

  return ref;
};

export const postResolution = 
  (committeeID: CommitteeID, resolutionData: ResolutionData): firebase.database.ThenableReference => {

  const ref = firebase.database()
    .ref('committees')
    .child(committeeID)
    .child('resolutions')
    .push();

  ref.set(resolutionData);

  return ref;
};