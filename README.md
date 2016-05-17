Re: [scottcorgan/tap-spec#37](https://github.com/scottcorgan/tap-spec/issues/37).

# Instructions

```
npm run broken

# Contrast with:
npm run working
```

# Expected Result

Output like the following, concluding with summary, is displayed:

```
whatever

  ✔ (unnamed assert)


total:     1
passing:   1
duration:  26ms
```

# Actual Result

No summary is displayed:

```
whatever

  ✔ (unnamed assert)
```
