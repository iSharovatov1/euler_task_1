package main

func main() {
	totalSum()
}

func totalSum() int {
	firstCounter := 3
	secondCounter := 5
	count := 0

	for firstCounter < 1000 {
		count += firstCounter
		firstCounter += 3
	}

	for secondCounter < 1000 {
		if secondCounter%3 != 0 {
			count += secondCounter
		}
		secondCounter += 5
	}
	return count
}
