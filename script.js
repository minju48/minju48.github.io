function checkAnswer() {
    const answer = document.querySelector('input[name="q1"]:checked');
    const result = document.getElementById("result");

    if (answer) {
        if (answer.value === "B") {
            result.textContent = "정답입니다! 스마트팜은 자동화된 농작물 재배 기술입니다.";
            result.style.color = "green";
        } else {
            result.textContent = "오답입니다. 스마트팜은 자동화된 농작물 재배를 목표로 합니다.";
            result.style.color = "red";
        }
    } else {
        result.textContent = "정답을 선택해 주세요.";
        result.style.color = "orange";
    }
}


function checkQuizAnswer() {
    const answer = document.querySelector('input[name="q1"]:checked');
    const resultDiv = document.getElementById("quiz-result");

    if (answer) {
        if (answer.value === "C") {
            resultDiv.textContent = "정답입니다! 대체육은 동물 근육을 사용하지 않습니다.";
            resultDiv.style.color = "green";
        } else {
            resultDiv.textContent = "오답입니다. 대체육은 동물 근육 대신 식물성 단백질을 사용합니다.";
            resultDiv.style.color = "red";
        }
    } else {
        resultDiv.textContent = "정답을 선택해 주세요.";
        resultDiv.style.color = "orange";
    }
}

const list = document.getElementById("process-list");
let draggedItem = null;

// 드래그 시작
list.addEventListener("dragstart", (e) => {
    draggedItem = e.target;
    e.target.style.opacity = "0.5";
});

// 드래그 종료
list.addEventListener("dragend", (e) => {
    e.target.style.opacity = "1";
});

// 드래그 오버 (항목 위로 드래그할 때)
list.addEventListener("dragover", (e) => {
    e.preventDefault();
});

// 드롭 (항목 위치 변경)
list.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.target.tagName === "LI" && e.target !== draggedItem) {
        const items = Array.from(list.children);
        const draggedIndex = items.indexOf(draggedItem);
        const targetIndex = items.indexOf(e.target);

        if (draggedIndex > targetIndex) {
            list.insertBefore(draggedItem, e.target);
        } else {
            list.insertBefore(draggedItem, e.target.nextSibling);
        }
    }
});

// 정답 확인
function checkOrder() {
    const correctOrder = ["item4", "item2", "item1", "item3"];
    const currentOrder = Array.from(list.children).map((item) => item.id);

    const resultDiv = document.getElementById("order-result");
    if (JSON.stringify(correctOrder) === JSON.stringify(currentOrder)) {
        resultDiv.textContent = "정답입니다! 대체육 가공 과정을 올바르게 정렬하셨습니다.";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "오답입니다. 올바른 순서를 다시 정렬해 보세요.";
        resultDiv.style.color = "red";
    }
}

function handleFeedback(isPositive) {
    if (isPositive) {
        alert("감사합니다! 푸드테크에 대한 지식을 얻는 데 조금이나마 도움이 되셨기를 바랍니다.");
    } else {
        alert("조금 더 좋은 웹페이지를 만들기 위해 노력하겠습니다. 부족한 실력이었음에도 끝까지 읽어주셔서 감사합니다.");
    }
}