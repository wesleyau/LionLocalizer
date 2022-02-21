# This class will create a list of dictionaries that contains the id, number of mismatches, author, paperurl, location id, genbanckaccession,
# indivs, locationName, lon, lat, locationType, location matchNotes, locality, accuracy
# then the output will be sorted by the least to greatest mismatches

# create a info dictionary and then create a mismatch dictionary

# or should it be a class that always runs that goes through the dictionary in the view of align
# and then dicitonary is in the parameter for this class

from .models import (
    LocHapPub,
    Sequences,
    Locations,
    Publications,
    LocHapPub,
    LHPIndividual,
)
from .serializers import (
    SequencesSerializer,
    LocationsSerializer,
    PublicationsSerializer,
    LocHapPubSerializer,
    LHPIndividualSerializer,
)
import operator


# formats output and wraps around text every 80 characters
def formattedOutput(sequence, mismatches, every=80):
    return "\n".join(
        sequence[i : i + every] + "\n" + "".join(mismatches[i : i + every])
        for i in range(0, len(sequence), every)
    )


def Align(request):
    input = request.data
    inputSeq = input["Detail"]
    seqName = ""
    seq = ""
    if inputSeq[0] == ">":  # in fasta format
        for line in inputSeq.splitlines():
            if line[0] == ">":
                seqName = line
                seq = ""
            else:
                seq = line
    else:  # not in fasta format
        seqName = ">input"  # temporary sequence id if one is not provided
        seq = inputSeq  # setting seq to the sequence
    # check for characters
    # check for length
    errors = []
    legitChars = "ATCG"
    for i in seq:
        if i not in legitChars:
            errors.append(
                "Your FASTA sequence has characters other than ACGT, ambiguous bases are not supported."
            )
            break

    # if len(seq) != 756:
    #    errors.append('Your sequence does not contain the correct number of base pairs, the cytB region input should contain 756 bp.')
    if len(errors) > 0:
        errors.append(seq)
        return errors

    # implied else
    sequenceList = []
    querySeq = seq  # alignmentQ
    seqkey = seqName  # alignmentQID
    mismatchCount = 0  # mismatch
    matchCount = 0  # match
    subjects = Sequences.objects.all()
    lionAlignment = []
    # an array that tell us whether the haplotype ID already was entered into lionAlignment

    for i in range(len(subjects)):  # len of subjects is 36
        alreadyInt = 0
        haplotypeID = subjects[i].id  # grabbing id of subject
        databaseSeq = subjects[i].cytB  # grabbing sequence of subject
        lions = LocHapPub.objects.filter(
            haplotype=haplotypeID
        )  # grabbing all lochappub that has subject.id

        mismatches = [
            "S",
            "u",
            "b",
            "j",
            "e",
            "c",
            "t",
            ":",
            " ",
        ]  # lazy way for adding subject to mismatches list for formatted output
        mismatchCount = 0
        matchCount = 0
        tempSeqDict = {}

        # comparison for loop
        for pos in range(0, len(databaseSeq)):
            # matches have . mismatches have the querySeq character
            if querySeq[pos] != databaseSeq[pos]:
                mismatches.append(databaseSeq[pos])
                mismatchCount += 1
            else:
                mismatches.append(".")
                matchCount += 1
        query = "Query:   " + querySeq  # adding query string for formatted output
        # output is every 80 characters, you can change in def formattedOutput

        formattedSeq = formattedOutput(query, mismatches)

        # if len(lions) == 0:
        #   continue # TODO: Handle the situation when a haplotype has no elephants
        locationarray = []
        lhp = []
        for l in lions:

            locationarray.append(
                {
                    "locationID": l.location.pk,
                    "locationName": l.location.locationName,
                    "lon": l.location.lon,
                    "lat": l.location.lat,
                    "locationType": l.location.locationType,
                    "locality": l.location.locality,
                    "accuracy": l.location.accuracy,
                    "lengthOfThisArray": len(lions),
                    "haplotypeId": haplotypeID,
                    "mismatch": mismatchCount,
                    "match": matchCount,
                    "paperurl": l.author.paperurl,
                    "author": l.author.author,
                }
            )

            for indiv in LHPIndividual.objects.filter(LHP=l.id):

                if indiv.genBankAccession != "":
                    lhp.append(
                        {
                            "genBankAccession": indiv.genBankAccession,
                            "numLions": indiv.numLions,
                        }
                    )

        lionAlignment.append(
            {
                "id": l.pk,
                "haplotypeId": haplotypeID,
                "queryName": seqName,
                "alignmentQ": databaseSeq,
                "alignmentS": querySeq,
                "formattedOutput": formattedSeq,  # "alignmentM":mismatches,
                "mismatch": mismatchCount,
                "match": matchCount,
                "author": l.author.author,
                "paperurl": l.author.paperurl,
                "matchNotes": l.location.matchNotes,
                "lochappub": lhp,
                "locArray": locationarray,
            }
        )

    res = sorted(lionAlignment, key=lambda x: x["mismatch"])

    return res
    # 36 sequences being compared to above^

    # redo data ~10 data in each table
